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
                data?: object;
              };
          }
        | {
              response:
                  | {
                        status: "success";
                        data?: object;
                    }
                  | {
                        status: "failed";
                        reason: string;
                    };
          }
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
export type DefineRequest<T extends object | undefined = undefined> = T extends undefined ? Record<string, never> : { data: T };
/** @internal */
export type DefineSuccessResponse<T extends object | undefined = undefined> = T extends undefined ? { status: "success" } : { status: "success", data: T };
/** @internal */
export type DefineFailedResponse<T extends string> = { status: "failed", reason: T };

/** @internal */
export type ServiceId<T extends TachyonSchema> = keyof T;
/** @internal */
export type RequestEndpointId<T extends TachyonSchema, S extends ServiceId<T>> = keyof {
    [key in keyof T[S] as T[S][key] extends { request: any } ? key : never]: T[S][key];
};
/** @internal */
export type ResponseEndpointId<T extends TachyonSchema, S extends ServiceId<T>> = keyof {
    [key in keyof T[S] as T[S][key] extends { response: any } ? key : never]: T[S][key];
};
/** @internal */
export type RequestType<T extends TachyonSchema, S extends ServiceId<T>, E extends RequestEndpointId<T, S>> = T[S][E] extends { request: infer Req } ? Req : object;
/** @internal */
export type ResponseType<T extends TachyonSchema, S extends ServiceId<T>, E extends ResponseEndpointId<T, S>> = T[S][E] extends { response: infer Res } ? Res : object;
/** @internal */
export type RequestData<T extends TachyonSchema, S extends ServiceId<T>, E extends RequestEndpointId<T, S>> = T[S][E] extends { request: { data: infer Data } } ? Data : never;
/** @internal */
export type ResponseData<T extends TachyonSchema, S extends ServiceId<T>, E extends ResponseEndpointId<T, S>> = T[S][E] extends { response: { data: infer Data } } ? Data : never;