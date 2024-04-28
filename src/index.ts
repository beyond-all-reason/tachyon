import { generateDocs } from "@/generate-docs.js";
import { generateJs } from "@/generate-js.js";
import { generateJsonSchemas } from "@/generate-json-schemas.js";

(async () => {
    // process.stdout.write("Cleaning dist folder...");
    // await fs.promises.rm("./dist", { force: true, recursive: true });
    // process.stdout.write("✔️\n");

    process.stdout.write("Generating JSONSchemas...");
    const { individualSchemas, compiledSchema, ids } = await generateJsonSchemas();
    process.stdout.write("✔️\n");

    process.stdout.write("Generating JS...");
    await generateJs(compiledSchema, ids);
    process.stdout.write("✔️\n");

    process.stdout.write("Generating Docs...");
    await generateDocs(individualSchemas, compiledSchema);
    process.stdout.write("✔️\n");
})();
