import fs from "fs";

import { generateCompiled } from "@/generate-compiled";
import { generateDocs } from "@/generate-docs";
import { generateJsonSchemas } from "@/generate-json-schemas";
import { generateMeta } from "@/generate-meta";
import { generateTSDefs } from "@/generate-ts-defs";

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
