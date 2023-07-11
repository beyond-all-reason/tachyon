import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description: "Unregisters the client as slavable.",
    request: {},
    response: [
        { status: "success" },
        { status: "failed", reason: "botflag_required" },
        { status: "failed", reason: "already_unslaved" },
    ],
});
