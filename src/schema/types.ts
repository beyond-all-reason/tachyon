import { Type } from "@sinclair/typebox";

import { IntersectAllOf } from "../helpers";

export const userIds = Type.Array(Type.Integer({ minimum: 0 }), { $id: "userIds" });

export const user = Type.Object({
    id: Type.Integer({ minimum: 0, description: "Unique Identifier for this user", examples: 1234 }),
    name: Type.String({ minLength: 2, maxLength: 20, pattern: "^[A-Za-z0-9_]+$" }),
    is_bot: Type.Boolean({ default: false }),
    clan_id: Type.Integer({ minimum: 0 }),
    icons: Type.Record(Type.String(), Type.String()),
    roles: Type.Array(Type.String())
}, { $id: "user" });

export const privateUser = IntersectAllOf([
    Type.Ref(user),
    Type.Object({
        permissions: Type.Array(Type.String()),
        friends: Type.Ref(userIds),
        friend_requests: Type.Ref(userIds),
        ignores: Type.Ref(userIds)
    })
], { $id: "privateUser" });