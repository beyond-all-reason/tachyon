import { Type } from "@sinclair/typebox";

import { partyId } from "@/schema/definitions/partyId";
import { unixTime } from "@/schema/definitions/unixTime";
import { userId } from "@/schema/definitions/userId";

export const partyState = Type.Object(
    {
        id: Type.Ref(partyId),
        members: Type.Array(
            Type.Object({
                userId: Type.Ref(userId),
                joinedAt: Type.Ref(unixTime),
            })
        ),
        invited: Type.Array(
            Type.Object({
                userId: Type.Ref(userId),
                invitedAt: Type.Ref(unixTime),
            })
        ),
    },
    { $id: "partyState" }
);
