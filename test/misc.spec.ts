import Ajv from "ajv";

import schema from "../schema/account/getUserClients/request.json";

const ajv = new Ajv();

test(schema.properties.command.const, () => {
    const validator = ajv.compile(schema);
    const valid = validator({
        command: "account/getUserClients/request",
        data: {
            ids: [1, 2],
        },
    });
    if (!valid) {
        console.error(validator.errors);
    }
    expect(valid).toBe(true);
});
