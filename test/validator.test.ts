/* eslint-disable no-restricted-imports */

import { MatchmakingQueueRequest, MatchmakingQueueResponse } from "../dist";
import validators from "../dist/validators";

describe("request", () => {
    const validator = validators.matchmaking_queue_request;

    test("valid", () => {
        const command: MatchmakingQueueRequest = {
            type: "request",
            commandId: "matchmaking/queue",
            messageId: "123",
            data: {
                queues: ["1v1"],
            },
        };

        const isValid = validator(command);

        expect(isValid).toBe(true);

        if (isValid) {
            expect(command.data.queues).toStrictEqual(["1v1"]);
        }
    });

    test("invalid", () => {
        const command: MatchmakingQueueRequest = {
            type: "request",
            commandId: "matchmaking/queue",
            messageId: "123",
            data: {
                // @ts-expect-error
                queues: [],
            },
        };

        const isValid = validator(command);

        expect(isValid).toBe(false);

        if (!isValid) {
            expect(validator.errors).toBeTruthy();
            expect(validator.errors?.length).toBeGreaterThan(0);
        }
    });
});

describe("response", () => {
    const validator = validators.matchmaking_queue_response;

    test("valid", () => {
        const command: MatchmakingQueueResponse = {
            type: "response",
            commandId: "matchmaking/queue",
            messageId: "56023780-bf7c-48a4-b2c7-a9eac00e7249",
            status: "failed",
            reason: "command_unimplemented",
        };

        const isValid = validator(command);

        expect(isValid).toBe(true);
    });

    test("invalid", () => {
        const command: MatchmakingQueueResponse = {
            type: "response",
            commandId: "matchmaking/queue",
            // @ts-expect-error
            messageId: 123,
            status: "success",
        };

        const isValid = validator(command);

        expect(isValid).toBe(false);

        if (!isValid) {
            expect(validator.errors).toBeTruthy();
            expect(validator.errors?.length).toBeGreaterThan(0);
        }
    });
});
