import fs from "node:fs";

import { generateJsonSchemas } from "@/generate-json-schemas.js";
import { generateCompiled } from "@/generate-compiled.js";
import { generateDocs } from "@/generate-docs.js";
import { generateMeta } from "@/generate-meta.js";
import { generateTSDefs } from "@/generate-ts-defs.js";

(async () => {
    console.log("Building Tachyon Protocol JSONSchema, Docs and TypeScript defs, validators...");

    await fs.promises.rm("./dist", { force: true, recursive: true });

    const { individualSchemas, compiledSchema, ids } = await generateJsonSchemas();

    await generateMeta(ids);

    await generateCompiled();

    await generateDocs(individualSchemas, compiledSchema);

    await generateTSDefs(compiledSchema);

    console.log("Done!");
})();
