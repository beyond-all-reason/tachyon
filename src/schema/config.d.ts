import { DefineRequest, DefineServiceSchema, DefineSuccessResponse } from "../helpers";

export type ConfigService = DefineServiceSchema<{
    /*
     * Game configs are a key-value store with no enforced structure. You can add keys as you wish, you can update keys to any type. Keys must be strings though values can be strings, integers, booleans, lists or even maps.
     * Note this is not designed to be a large data store, please don't store large blobs of data in it.
     */
    getGameTypes: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    setGame: {
        response: DefineSuccessResponse;
    };
    getGame: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    /*
     * UserClient configs are tied to the Teiserver structured configs that can be accessed on the site itself. These are constrained by data type (though will where possible convert inputs to that data type) and come with defaults.
     */
    getUserClientTypes: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
    setUserClient: {
        response: DefineSuccessResponse;
    };
    getUserClient: {
        request: DefineRequest;
        response: DefineSuccessResponse;
    };
}>;
