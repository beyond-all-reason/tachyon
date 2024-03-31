import type { EmptyObject, KeysOfUnion } from "type-fest";

export type ServiceId = keyof Tachyon;
export type EndpointId<S extends ServiceId> = keyof Tachyon[S];
export type Command<S extends ServiceId, E extends EndpointId<S>> = Tachyon[S][E];

export type RequestCommand<S extends ServiceId, E extends EndpointId<S>> = Command<S, E> extends {
    request: infer Request;
}
    ? Request
    : never;

export type ResponseCommand<S extends ServiceId, E extends EndpointId<S>> = Command<S, E> extends {
    response: infer Response;
}
    ? Response
    : never;

export type RequestEndpointId<S extends ServiceId> = {
    [E in EndpointId<S>]: "request" extends keyof Command<S, E> ? E : never;
}[EndpointId<S>];

export type ResponseEndpointId<S extends ServiceId> = {
    [E in EndpointId<S>]: "response" extends keyof Command<S, E> ? E : never;
}[EndpointId<S>];

export type ResponseOnlyEndpointId<S extends ServiceId> = {
    [E in EndpointId<S>]: Command<S, E> extends RequestCommand<S, E> ? never : E;
}[EndpointId<S>];

export type RequestData<S extends ServiceId, E extends EndpointId<S>> = RequestCommand<
    S,
    E
> extends {
    data: infer Data;
}
    ? Data
    : never;

type DistributiveOmit<T, K extends keyof T> = T extends T ? Omit<T, K> : never;
export type ResponseData<S extends ServiceId, E extends EndpointId<S>> = ResponseCommand<
    S,
    E
> extends { commandId: string; messageId: string }
    ? DistributiveOmit<ResponseCommand<S, E>, "commandId" | "messageId">
    : never;

export type SuccessResponseData<S extends ServiceId, E extends EndpointId<S>> = ResponseCommand<
    S,
    E
> & {
    status: "success";
} extends { data: infer Data }
    ? Data
    : never;

export type EmptyRequestId<S extends ServiceId> = {
    [K in EndpointId<S>]: RequestData<S, K> extends EmptyObject ? K : never;
}[EndpointId<S>];

export type DataRequestId<S extends ServiceId> = {
    [K in EndpointId<S>]: RequestData<S, K> extends EmptyObject ? never : K;
}[EndpointId<S>];

export type RequestType = {
    [S in keyof Tachyon]: {
        [E in keyof Tachyon[S]]: Tachyon[S][E] extends { request: unknown }
            ? Tachyon[S][E]["request"]
            : never;
    }[KeysOfUnion<Tachyon[S]>];
}[KeysOfUnion<Tachyon>];

export type ResponseType = {
    [S in keyof Tachyon]: {
        [E in keyof Tachyon[S]]: Tachyon[S][E] extends { response: unknown }
            ? Tachyon[S][E]["response"]
            : never;
    }[KeysOfUnion<Tachyon[S]>];
}[KeysOfUnion<Tachyon>];

export type RequestCommandId = Pick<RequestType, "commandId">;
export type ResponseCommandId = Pick<ResponseType, "commandId">;

export type GenericRequestCommand = {
    commandId: string;
    messageId: string;
    data?: Record<string, unknown>;
};

export type GenericResponseCommand = {
    commandId: string;
    messageId: string;
} & (
    | {
          status: "success";
          data?: Record<string, unknown>;
      }
    | {
          status: "failed";
          reason: string;
      }
);
