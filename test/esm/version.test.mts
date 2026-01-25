/* eslint-disable no-restricted-imports */

import assert from "node:assert";
import { test } from "node:test";

import { tachyonMeta } from "../../dist/index.js";
import packageJson from "../../package.json";

test("version", () => {
    assert.equal(tachyonMeta.version, packageJson.version);
});
