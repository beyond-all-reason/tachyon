import Type from "typebox";

import { Nullable } from "@/typebox-utils.js";

export const voteHistory = Type.Record(
    Type.String(), // Vote ID
    Nullable(
        Type.Object({
            vote: Type.Ref("voteActions"),
            outcome: Type.Ref("voteOutcomes"),
            finishedAt: Type.Ref("unixTime"),
        })
    ),
    {
        $id: "voteHistory",
        description: "History of votes keyed by vote ID",
    }
);
