import { DefineServiceSchema, EmptyObject } from "../helpers";

export type LobbyService = DefineServiceSchema<{
  // This is the server telling you your userClient has been updated
  updateStatus: {
    request: EmptyObject;
    response: { success: EmptyObject };
  };
}>;
