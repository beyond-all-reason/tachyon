import fs from "fs";

import { generateDocs } from "@/generate-docs.js";
import { generateJs } from "@/generate-js.js";
import { generateJsonSchemas } from "@/generate-json-schemas.js";

const clean = false; // enabling this can cause intellisense errors when developing with linked npm modules because of caching

(async () => {
    if (clean) {
        process.stdout.write("Cleaning output folders...");
        await fs.promises.rm("./dist", { force: true, recursive: true });
        await fs.promises.rm("./schema", { force: true, recursive: true });
        process.stdout.write("✔️\n");
    }

    process.stdout.write("Generating JSONSchemas...");
    const { individualSchemas, compiledSchema, unionSchema, schemaMeta } = await generateJsonSchemas();
    process.stdout.write("✔️\n");

    await generateJs(compiledSchema, unionSchema, schemaMeta);

    process.stdout.write("Generating Docs...");
    await generateDocs(individualSchemas, unionSchema, compiledSchema);
    process.stdout.write("✔️\n");
})();
