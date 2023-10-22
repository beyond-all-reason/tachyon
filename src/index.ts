import { EndpointConfig, FailedResponseSchema, SuccessResponseSchema } from "@/helpers";
import { generateTSDefs } from "./generate-ts-defs";
import { generateDocs } from "./generate-docs";
import { generateMeta } from "./generate-meta";
import { generateValidator } from "./generate-validators";
import { generateJsonSchemas } from "./generate-json-schemas";

(async () => {
    console.log("Building Tachyon Protocol JSONSchema, Docs and TypeScript defs, validators...");

    const { individualSchemas, compiledSchema, ids } = await generateJsonSchemas();

    await generateDocs(individualSchemas, compiledSchema);

    await generateMeta(ids);

    await generateTSDefs(compiledSchema);

    await generateValidator();

    console.log("Done!");
})();
