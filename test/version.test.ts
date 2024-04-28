/* eslint-disable no-restricted-imports */

import { tachyonMeta } from "../dist";
import packageJson from "../package.json";

test("version", () => {
    expect(tachyonMeta.version).toEqual(packageJson.version);
});
