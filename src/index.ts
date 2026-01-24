import fs from "fs";
import { Settings } from "typebox/system";

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

    // We want to prevent any modifications to type objects to prevent weird bugs
    // in already messy generators. Making sure that all operations don't modify
    // the types brings a bit of sanity back.
    Settings.Set({ immutableTypes: true });

    process.stdout.write("Generating JSONSchemas...");
    const tachyonConfig = await generateJsonSchemas();
    process.stdout.write("✔️\n");

    await generateJs(tachyonConfig);

    process.stdout.write("Generating Docs...");
    await generateDocs(tachyonConfig);
    process.stdout.write("✔️\n");
})();
