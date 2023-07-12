import Ajv from "ajv";
import ajvFormats from "ajv-formats";

// eslint-disable-next-line no-restricted-imports
import registerRequestSchema from "../dist/auth/register/request.json";

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
