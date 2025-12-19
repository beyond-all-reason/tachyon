import { Type } from "@sinclair/typebox";

export const clan = Type.Object(
    {
        clanId: Type.Ref("clanId"),
        tag: Type.String({ minLength: 3, maxLength: 6 }),
        name: Type.String({ maxLength: 30 }),
        description: Type.Optional(Type.String({ maxLength: 500 })),
        logoUrl: Type.Optional(Type.String({ format: "uri", maxLength: 200 })),
        websiteUrl: Type.Optional(Type.String({ format: "uri", maxLength: 200 })),
        discordUrl: Type.Optional(Type.String({ format: "uri", maxLength: 200 })),
        teamspeakUrl: Type.Optional(Type.String({ format: "uri", maxLength: 200 })),
        twitchUrl: Type.Optional(Type.String({ format: "uri", maxLength: 200 })),
        youtubeUrl: Type.Optional(Type.String({ format: "uri", maxLength: 200 })),
        facebookUrl: Type.Optional(Type.String({ format: "uri", maxLength: 200 })),
        twitterUrl: Type.Optional(Type.String({ format: "uri", maxLength: 200 })),
        memberCount: Type.Number({ minimum: 0 }),
    },
    { $id: "clan" }
);
