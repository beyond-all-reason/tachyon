import { EndpointSchema, RequestSchema, ResponseSchema } from "@/helpers";
import jsf from "json-schema-faker";
import { compile } from "json-schema-to-typescript";
import { Value } from "@sinclair/typebox/value";

jsf.option("useExamplesValue", true);
jsf.option("random", () => 0.123);

export async function generateMarkdown<T extends Record<string, EndpointSchema>>(schema: T, serviceId: string): Promise<string> {
    let markdown = "";

    for (const endpointId in schema) {
        const endpointSchema = schema[endpointId] as EndpointSchema;
        markdown += `## ${endpointId.toString()}\n\n`;
        markdown += await generateEndpointMarkdown(endpointSchema, serviceId, endpointId);
    }

    return markdown;
}

async function generateEndpointMarkdown<T extends EndpointSchema>(schema: T, serviceId: string, endpointId: string): Promise<string> {
    let serviceMarkdown = "";

    if ("request" in schema) {
        serviceMarkdown += `### request\n\n`;
        serviceMarkdown += await generateCommandMarkdown(schema.request, serviceId, endpointId, "request");
    }

    if ("response" in schema) {
        serviceMarkdown += `### response\n\n`;
        serviceMarkdown += await generateCommandMarkdown(schema.response, serviceId, endpointId, "response");
    }

    return serviceMarkdown;
}

async function generateCommandMarkdown<C extends "request" | "response", T extends C extends "request" ? RequestSchema : ResponseSchema>(
    schema: T,
    serviceId: string,
    endpointId: string,
    commandType: C
): Promise<string> {
    let commandMarkdown = "";

    //     commandMarkdown += `#### JSONSchema
    // \`\`\`json
    // ${JSON.stringify(schema, null, 4)}
    // \`\`\`
    // `;

    commandMarkdown += `[JSONSchema](../dist/${serviceId}/${endpointId}/${commandType}.json)\n\n`;

    let typings = await compile(schema, "a", {
        additionalProperties: false,
        bannerComment: ``,
        style: {
            bracketSpacing: true,
            tabWidth: 4,
            semi: true,
        },
    });
    typings = typings.replace("export interface A ", "");

    commandMarkdown += `#### TypeScript Definition
\`\`\`ts
${typings}
\`\`\`
`;

    const dummyData = await jsf.resolve(schema);

    commandMarkdown += `#### Example
\`\`\`json
${JSON.stringify(dummyData, null, 4)}
\`\`\`
`;

    return commandMarkdown;
}
