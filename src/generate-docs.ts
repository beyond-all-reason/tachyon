import { TObject, TSchema, TUnion } from "@sinclair/typebox";
import fs from "fs";
import { titleCase } from "jaz-ts-utils";
import { JSONSchemaFaker } from "json-schema-faker";

import { EndpointConfig } from "@/generator-helpers.js";

JSONSchemaFaker.option("useExamplesValue", true);
JSONSchemaFaker.option("useDefaultValue", true);
let randomSeed = 0;

const autoGeneratedPrefix = `<!-- THIS FILE IS AUTOMATICALLY GENERATED, PLEASE DO NOT EDIT IT MANUALLY -->\n\n`;

export async function generateDocs(tachyonSchema: Record<string, Record<string, EndpointConfig>>, unionSchema: TUnion<TSchema[]>, fullSchema: TObject) {
    let schemaContents = "";
    for (const serviceId in tachyonSchema) {
        schemaContents += `    -   [${serviceId}](docs/schema/${serviceId}.md)\n`;
    }

    let mainReadme = await fs.promises.readFile("README.md", { encoding: "utf-8" });
    const regex = /(?<=COMMAND_SCHEMA_PLACEHOLDER_START.*$\n)[\s|\S]*(?=^.*COMMAND_SCHEMA_PLACEHOLDER_END.*)/ms;
    if (!mainReadme.match(regex)) {
        throw new Error("Could not find COMMAND_SCHEMA_PLACEHOLDER comment in main README.md");
    }
    mainReadme = mainReadme.replace(regex, schemaContents);
    await fs.promises.writeFile("README.md", mainReadme);

    for (const serviceId in tachyonSchema) {
        const serviceSchema = tachyonSchema[serviceId] as Record<string, EndpointConfig>;

        const orderedEndpointIds = Object.keys(serviceSchema).sort((a, b) => {
            const orderA = serviceSchema[a]?.order ?? Infinity;
            const orderB = serviceSchema[b]?.order ?? Infinity;

            return orderA - orderB;
        });

        const orderedEndpoints = {} as Record<string, TObject>;
        for (const id of orderedEndpointIds) {
            orderedEndpoints[id] = fullSchema.properties[serviceId].properties[id];
        }

        const markdown = await generateServiceMarkdown(tachyonSchema, unionSchema, orderedEndpoints, serviceId);

        await fs.promises.writeFile(`docs/schema/${serviceId.toString()}.md`, markdown);
    }
}

export async function generateServiceMarkdown<T extends Record<string, TObject>>(
    tachyonSchema: Record<string, Record<string, EndpointConfig>>,
    unionSchema: TUnion<TSchema[]>,
    endpoints: T,
    serviceId: string
): Promise<string> {
    let markdown = autoGeneratedPrefix;

    markdown += `# ${titleCase(serviceId)}\n\n`;

    if (fs.existsSync(`src/schema/${serviceId}/README.md`)) {
        const serviceReadme = await fs.promises.readFile(`src/schema/${serviceId}/README.md`, {
            encoding: "utf8",
        });

        markdown += `${serviceReadme}\n---\n`;
    }

    for (const endpointId in endpoints) {
        markdown += `- [${endpointId}](#${endpointId.toLowerCase()})\n`;
    }

    for (const endpointId in endpoints) {
        const endpointSchema = endpoints[endpointId];
        const endpointConfig = tachyonSchema[serviceId][endpointId];
        markdown += await generateEndpointMarkdown(endpointSchema, unionSchema, endpointConfig, serviceId, endpointId);
    }

    return markdown;
}

export async function generateEndpointMarkdown<T extends TObject>(
    schema: T,
    unionSchema: TUnion<TSchema[]>,
    endpointConfig: EndpointConfig,
    serviceId: string,
    endpointId: string
): Promise<string> {
    let markdown = `---\n\n## ${titleCase(endpointId)}\n\n`;

    if (schema.description) {
        markdown += `${schema.description}\n\n`;
    }

    markdown += `- Endpoint Type: `;

    if ("request" in schema.properties && "response" in schema.properties) {
        markdown += `**Request** -> **Response**\n`;
    } else if ("event" in schema.properties) {
        markdown += `**Event**\n`;
    }

    markdown += `- Source: **${titleCase(endpointConfig.source)}**\n`;
    markdown += `- Target: **${titleCase(endpointConfig.target)}**\n`;

    if (endpointConfig.scopes.length) {
        markdown += `- Requires Role: \`${endpointConfig.scopes}\`\n\n`;
    }

    if ("request" in schema.properties) {
        markdown += await generateCommandMarkdown(schema.properties.request as TObject, unionSchema, serviceId, endpointId, "request");
    }

    if ("response" in schema.properties) {
        markdown += await generateCommandMarkdown(schema.properties.response as TUnion, unionSchema, serviceId, endpointId, "response");
    }

    if ("event" in schema.properties) {
        markdown += await generateCommandMarkdown(schema.properties.event as TUnion, unionSchema, serviceId, endpointId, "event");
    }

    return markdown;
}

export async function generateCommandMarkdown<C extends "request" | "response" | "event", T extends C extends "request" ? TObject : TUnion>(
    schema: T,
    unionSchema: TUnion<TSchema[]>,
    serviceId: string,
    endpointId: string,
    commandType: C
): Promise<string> {
    let markdown = `### ${titleCase(commandType)}\n\n`;

    markdown += `JSONSchema\n
\`\`\`json
${JSON.stringify(schema, null, 4)}
\`\`\`\n`;

    if (commandType === "response") {
        schema = schema.anyOf.find((res: TObject) => res.properties.status.const === "success");
    }

    JSONSchemaFaker.option("random", () => randomSeed);
    randomSeed += 0.01;

    const dummyData = await JSONSchemaFaker.resolve(schema, unionSchema.definitions);

    markdown += `<details>
<summary>Example</summary>\n
\`\`\`json
${JSON.stringify(dummyData, null, 4)}
\`\`\`\n</details>\n\n`;

    //     let typings = await compile(schema, `${titleCase(serviceId)}${titleCase(endpointId)}${titleCase(commandType)}`, {
    //         additionalProperties: false,
    //         bannerComment: ``,
    //         style: {
    //             bracketSpacing: true,
    //             tabWidth: 4,
    //             semi: true,
    //         },
    //     });

    //     typings = typings.replace(/\s*\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, ""); // remove comments

    //     markdown += `#### TypeScript Definition
    // \`\`\`ts
    // ${typings}
    // \`\`\`
    // `;

    return markdown;
}
