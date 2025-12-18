import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description: "Create a clan.",
    request: {
        data: Type.Object({ clan: Type.Ref("clan") }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "tag_already_exists" },
        { status: "failed", reason: "name_already_exists" },
        { status: "failed", reason: "invalid_tag_length" },
        { status: "failed", reason: "invalid_name_length" },
        { status: "failed", reason: "invalid_description_length" },
        { status: "failed", reason: "invalid_logo_url" },
        { status: "failed", reason: "invalid_website_url" },
        { status: "failed", reason: "invalid_discord_url" },
        { status: "failed", reason: "invalid_teamspeak_url" },
        { status: "failed", reason: "invalid_twitch_url" },
        { status: "failed", reason: "invalid_youtube_url" },
        { status: "failed", reason: "invalid_facebook_url" },
        { status: "failed", reason: "invalid_twitter_url" },
    ],
});
