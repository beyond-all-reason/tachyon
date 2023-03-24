import { Type } from "@sinclair/typebox";

import { Endpoint, schemaRef } from "../helpers";
import { lobby } from "./types";

export const configEndpoints: Record<string, Endpoint> = {
  /*
  Game configs are a key-value store with no enforced structure. You can add keys as you wish, you can update keys to any type. Keys must be strings though values can be strings, integers, booleans, lists or even maps.

  Note this is not designed to be a large data store, please don't store large blobs of data in it.
  */
  list_game_types: {
    request: Type.Object({}),
    response: Type.Object({})
  },
  set_game: {
    request: Type.Object({}),
    response: Type.Object({})
  },
  get_game: {
    request: Type.Object({}),
    response: Type.Object({})
  },
  
  /*
  User configs are tied to the Teiserver structured configs that can be accessed on the site itself. These are constrained by data type (though will where possible convert inputs to that data type) and come with defaults.
  */
  list_user_types: {
    request: Type.Object({}),
    response: Type.Object({})
  },
  set_user: {
    request: Type.Object({}),
    response: Type.Object({})
  },
  get_user: {
    request: Type.Object({}),
    response: Type.Object({})
  }
};
