import Ajv from "ajv";

import allSchemas from "../schema.json";

const ajv = new Ajv();

ajv.addSchema(allSchemas);

console.log(allSchemas);

test("auth/get_token/request", () => {
    const requestValidator = ajv.getSchema("auth.get_token.request")!;
    console.log(requestValidator);
    const valid = requestValidator({
        cmd: "auth/get_token/request",
        data: {
            email: "bob@thing.com",
            password: "yep121231"
        }
    });
    if (!valid) {
        console.log(requestValidator.errors);
    }
    expect(valid).toBe(true);
});