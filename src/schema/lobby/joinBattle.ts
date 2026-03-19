import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    source: "user",
    target: "server",
    description:
        "Join the battle this lobby is currently playing (as a spectator). If the request success, the client should receive shortly after a battle/start request from the server with the data required to join the game.",
    request: {},
    response: [
        { status: "failed", reason: "not_in_lobby" },
        { status: "failed", reason: "no_battle" },
        { status: "failed", reason: "battle_full" },
        { status: "success" },
    ],
});
