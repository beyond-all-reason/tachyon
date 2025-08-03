import { Type } from "@sinclair/typebox";

export const partyState = Type.Object(
    {
        id: Type.Ref("partyId"),
        members: Type.Array(
            Type.Object({
                userId: Type.Ref("userId"),
                joinedAt: Type.Ref("unixTime"),
            })
        ),
        invited: Type.Array(
            Type.Object({
                userId: Type.Ref("userId"),
                invitedAt: Type.Ref("unixTime"),
            })
        ),
    },
    { $id: "partyState" }
);
