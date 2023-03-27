import Ajv from "ajv";

import allSchemas from "../schema.json";

const ajv = new Ajv();

ajv.addSchema(allSchemas);

test("account/list_users/request", () => {
    const requestValidator = ajv.getSchema("account.list_users.request")!;
    console.log(requestValidator);
    const valid = requestValidator({
        command: "account/list_users/request",
        data: {
            ids: [1, 2]
        }
    });
    if (!valid) {
        console.log(requestValidator.errors);
    }
    expect(valid).toBe(true);
});