import { Type } from "@sinclair/typebox";
import Ajv from "ajv";

import schema from "../schema/full_1.json";

const ajv = new Ajv({
    schemas: {
        schema["$defs"]
    }
});

test("who_am_i:request", () => {
    const requestValidator = ajv.compile(accountEndpoints.who_am_i.properties.request);
    const valid = requestValidator({});
    if (!valid) {
        console.log(requestValidator.errors);
    }
    expect(valid).toBe(true);
});

test("who_am_i:response", () => {
    const responseValidator = ajv.compile(accountEndpoints.who_am_i.properties.response);
    const valid = responseValidator({
        name: "bob"
    });
    if (!valid) {
        console.log(responseValidator.errors);
    }
    expect(valid).toBe(true);
});