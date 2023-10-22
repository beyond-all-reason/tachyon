// eslint-disable-next-line no-restricted-imports
import packageJson from "../package.json";
import fs from "fs";

export async function generateMeta(ids: Record<string, Record<string, string[]>>) {
    const meta = {
        version: packageJson.version,
        ids,
    };

    await fs.promises.writeFile("dist/meta.json", JSON.stringify(meta, null, 4));
}
