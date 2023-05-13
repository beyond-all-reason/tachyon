/** @internal */
export type DefineTachyonSchema<T extends TachyonSchema> = Tachyon<T>;

/** @internal */
export type DefineServiceSchema<T extends ServiceSchema> = T;

/** @internal */
export type TachyonSchema = {
    [serviceId: string]: ServiceSchema;
};

/** @internal */
export type ServiceSchema = {
    [endpointId: string]:
        | {
              request: {
                  data: any;
              };
          }
        | {
              response:
                  | {
                        status: "success";
                        data?: any;
                    }
                  | {
                        status: "failed";
                        reason: string;
                    };
          };
};

/** @internal */
export type Tachyon<T extends TachyonSchema> = {
    [serviceId in keyof T]: serviceId extends string
        ? {
              [endpointId in keyof T[serviceId]]: endpointId extends string
                  ? {
                        [requestType in keyof T[serviceId][endpointId] as requestType extends "request" | "response" ? requestType : never]: requestType extends string
                            ? {
                                  command: `${serviceId}/${endpointId}/${requestType}`;
                              } & T[serviceId][endpointId][requestType]
                            : never;
                    }
                  : never;
          }
        : never;
};

/** @internal */
export type Request<T = undefined> = T extends undefined
    ? object
    : {
          data: T;
      };

/** @internal */
export type FailedResponse<Reason extends string, T = undefined> = T extends undefined
    ? {
          status: "failed";
          reason: Reason;
      }
    : {
          status: "failed";
          reason: Reason;
          data: T;
      };

/** @internal */
export type SuccessResponse<T = undefined> = T extends undefined
    ? {
          status: "success";
      }
    : {
          status: "success";
          data: T;
      };
