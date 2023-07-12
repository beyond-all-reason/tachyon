import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description:
        "Registers the client as slavable by the master server to be used for hosting dedicated lobbies or matchmaking.",
    requiresRole: "bot",
    request: {},
    response: [{ status: "success" }, { status: "failed", reason: "botflag_required" }],
});
