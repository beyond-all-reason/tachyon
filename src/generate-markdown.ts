import { TObject, TUnion } from "@sinclair/typebox";
import jsf from "json-schema-faker";
import { compile } from "json-schema-to-typescript";

jsf.option("useExamplesValue", true);
jsf.option("random", () => 0.1234);

export async function generateMarkdown<T extends Record<string, TObject>>(
    endpoints: T,
    serviceId: string
): Promise<string> {
    let markdown = "";

    for (const endpointId in endpoints) {
        const endpointConfig = endpoints[endpointId];
        markdown += `---\n\n## ${endpointId.toString()}\n\n`;
        if (endpointConfig.description) {
            markdown += `${endpointConfig.description}\n\n`;
        }
        markdown += await generateEndpointMarkdown(endpointConfig, serviceId, endpointId);
    }

    return markdown;
}

async function generateEndpointMarkdown<T extends TObject>(
    schema: T,
    serviceId: string,
    endpointId: string
): Promise<string> {
    let serviceMarkdown = "";

    if ("request" in schema.properties) {
        serviceMarkdown += `### request\n\n`;
        serviceMarkdown += await generateCommandMarkdown(
            schema.properties.request as TObject,
            serviceId,
            endpointId,
            "request"
        );
    }

    if ("response" in schema.properties) {
        serviceMarkdown += `### response\n\n`;
        serviceMarkdown += await generateCommandMarkdown(
            schema.properties.response as TUnion,
            serviceId,
            endpointId,
            "response"
        );
    }

    return serviceMarkdown;
}

async function generateCommandMarkdown<
    C extends "request" | "response",
    T extends C extends "request" ? TObject : TUnion
>(schema: T, serviceId: string, endpointId: string, commandType: C): Promise<string> {
    let commandMarkdown = "";

    commandMarkdown += `<details>
<summary>JSONSchema</summary>\n
\`\`\`json
${JSON.stringify(schema, null, 4)}
\`\`\`\n
</details>\n\n`;

    let typings = await compile(schema, "A", {
        additionalProperties: false,
        bannerComment: ``,
        style: {
            bracketSpacing: true,
            tabWidth: 4,
            semi: true,
        },
    });

    typings = typings.replace(/\s*\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, ""); // remove comments

    commandMarkdown += `#### TypeScript Definition
\`\`\`ts
${typings}
\`\`\`
`;

    if (commandType === "response") {
        schema = schema.anyOf.find((res: TObject) => res.properties.status.const === "success");
    }

    const dummyData = await jsf.resolve(schema);

    commandMarkdown += `#### Example
\`\`\`json
${JSON.stringify(dummyData, null, 4)}
\`\`\`
`;

    return commandMarkdown;
}
