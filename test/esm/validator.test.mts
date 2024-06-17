/* eslint-disable no-restricted-imports */

import assert from "node:assert";
import { describe, test } from "node:test";

import { MatchmakingQueueRequest, MatchmakingQueueResponse } from "../../dist/types";
import * as validators from "../../dist/validators.mjs";

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

        assert.equal(isValid, true);

        if (isValid) {
            assert.equal(command.data.queues[0], "1v1");
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

        assert.equal(isValid, false);
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

        assert.equal(isValid, true);
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

        assert.equal(isValid, false);
    });
});
