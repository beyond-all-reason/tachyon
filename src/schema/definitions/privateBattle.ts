import { Type } from "@sinclair/typebox";

export const privateBattle = Type.Object({
    username: Type.String(),
    password: Type.String(),
    ip: Type.String(),
    port: Type.Number(),
});
