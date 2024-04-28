/* eslint-disable no-restricted-imports */

import { MatchmakingQueueRequest } from "../dist";
import validators from "../dist/validators";

describe("matchmaking", () => {
    describe("queue", () => {
        test("request", () => {
            const validator = validators.matchmaking_queue_request;

            const data: MatchmakingQueueRequest = {
                commandId: "matchmaking/queue/request",
                messageId: "123",
                data: {
                    queues: ["1v1"],
                },
            };

            const isValid = validator(data);

            expect(isValid).toBe(true);

            if (isValid) {
                expect(data.data.queues).toStrictEqual(["1v1"]);
            }
        });
    });
});
