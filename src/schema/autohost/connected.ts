import { defineEndpoint } from "@/generator-helpers.js";

export default defineEndpoint({
    description: "Like [system/connected](system#connected), but only sent to autohosts.",
    response: [
        {
            status: "success",
        },
    ],
});
