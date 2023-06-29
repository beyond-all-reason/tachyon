import Ajv, { JSONSchemaType } from "ajv";
import ajvFormats from "ajv-formats";

import registerRequestSchema from "../dist/auth/register/request.json";
import { Tachyon } from "..";
import { Static } from "@sinclair/typebox";

const ajv = new Ajv();

ajvFormats(ajv);

test(registerRequestSchema.properties.command.const, () => {
    const validator = ajv.compile(registerRequestSchema);
    const valid = validator({
        command: "auth/register/request",
        data: {
            email: "bob@test.com",
            username: "bob",
            password: "1234567",
        },
    });
    if (!valid) {
        console.error(validator.errors);
    }
    expect(valid).toBe(true);
});
