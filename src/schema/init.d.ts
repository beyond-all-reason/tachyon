import { DefineServiceSchema } from "../helpers";

export type InitService = DefineServiceSchema<{
    init: {
        response:
            | {
                  status: "success";
                  data: {
                      tachyonVersion: string;
                  };
              }
            | {
                  status: "failed";
                  reason: "shit";
              };
    };
}>;
