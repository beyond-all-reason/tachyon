import Ajv from "ajv";

import schema from "../schema.json";

const ajv = new Ajv({
    schemas: schema
});

test("who_am_i:request", () => {
    const requestValidator = ajv.getSchema("auth/get_token/request")!;
    const valid = requestValidator({
        id: "auth/get_token/request",
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

test("who_am_i:response", () => {
    const responseValidator = ajv.getSchema("auth/get_token/response")!;
    const valid = responseValidator({
        id: "auth/get_token/response",
        data: {
            token: "123456"
        }
    });
    if (!valid) {
        console.log(responseValidator.errors);
    }
    expect(valid).toBe(true);
});