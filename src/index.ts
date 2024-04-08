import fs from "node:fs";

import { generateJsonSchemas } from "@/generate-json-schemas.js";
import { generateCompiled } from "@/generate-compiled.js";
import { generateDocs } from "@/generate-docs.js";
import { generateMeta } from "@/generate-meta.js";
import { generateTSDefs } from "@/generate-ts-defs.js";

(async () => {
    console.log("Cleaning dist folder 🧹");
    await fs.promises.rm("./dist", { force: true, recursive: true });

    console.log("Generating JSONSchemas 🔨");
    const { individualSchemas, compiledSchema, ids } = await generateJsonSchemas();

    console.log("Generating Meta 🔨");
    await generateMeta(ids);

    console.log("Generating Compiled Schemas 🔨");
    await generateCompiled();

    console.log("Generating Docs 📖");
    await generateDocs(individualSchemas, compiledSchema);

    console.log("Generating TypeScript Definitions 🔨");
    await generateTSDefs(compiledSchema);

    console.log("Done! ✅");
})();
