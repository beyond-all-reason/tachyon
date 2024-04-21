/* eslint-disable no-restricted-imports */

import validators from "../dist/validators";

it("validators", () => {
    const validator = validators["system_connected_response"];

    const isValid = validator({
        commandId: "system/connected/response",
        messageId: "123",
        data: {
            status: {},
        },
    });

    expect(isValid).toBe(false);
});
