import Ajv from "ajv";

import schema from "../schema.json";

const ajv = new Ajv();

const accountEndpoints = schema.endpoints.account;

test("who_am_i:request", () => {
    const requestValidator = ajv.compile(accountEndpoints.who_am_i.request);
    const valid = requestValidator({});
    if (!valid) {
        console.log(requestValidator.errors);
    }
    expect(valid).toBe(true);
});

test("who_am_i:response", () => {
    // TODO
    expect(true).toBe(true);
});