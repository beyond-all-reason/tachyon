import Type from "typebox";

import { Nullable } from "@/typebox-utils.js";

export const currentVote = Nullable(
    Type.Object({
        id: Type.String(),
        action: Type.Ref("voteActions"),
        initiator: Type.Ref("userId"),
        voters: Type.Record(
            Type.String(),
            Nullable(
                Type.Object({
                    vote: Type.Enum(["pending", "yes", "no", "abstain"]),
                })
            ),
            {
                description: "indexed by the userId. The initiator is also included in this object",
            }
        ),
        until: Type.Ref("unixTime"),
        quorum: Type.Integer({
            minimum: 1,
            description: "this many player must vote for the vote to be valid at all.",
        }),
        majority: Type.Integer({
            minimum: 1,
            description: "votes passes when number(yes) >= majority",
        }),
    }),
    {
        $id: "currentVote",
        description: "The current vote in progress, if any",
    }
);
