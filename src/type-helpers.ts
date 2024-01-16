import type { EmptyObject } from "type-fest";

export type ServiceId = keyof Tachyon;
export type EndpointId<S extends ServiceId> = keyof Tachyon[S];
export type Command<S extends ServiceId, E extends EndpointId<S>> = Tachyon[S][E];

export type Request<S extends ServiceId, E extends EndpointId<S>> = Command<S, E> extends {
    request: infer Request;
}
    ? Request
    : never;
export type Response<S extends ServiceId, E extends EndpointId<S>> = Command<S, E> extends {
    response: infer Response;
}
    ? Response
    : never;

export type RequestEndpointId<S extends ServiceId> = {
    [K in EndpointId<S>]: Request<S, K> extends never ? never : K;
}[EndpointId<S>];

export type ResponseEndpointId<S extends ServiceId> = {
    [K in EndpointId<S>]: Response<S, K> extends never ? never : K;
}[EndpointId<S>];

export type RequestOnlyEndpointId<S extends ServiceId> = Exclude<
    RequestEndpointId<S>,
    ResponseEndpointId<S>
>;
export type ResponseOnlyEndpointId<S extends ServiceId> = Exclude<
    ResponseEndpointId<S>,
    RequestEndpointId<S>
>;

export type RequestData<S extends ServiceId, E extends EndpointId<S>> = Request<S, E> extends {
    data: infer Data;
}
    ? Data
    : never;

export type SuccessResponseData<S extends ServiceId, E extends EndpointId<S>> = Response<S, E> & {
    status: "success";
} extends { data: infer Data }
    ? Data
    : never;

export type EmptyRequestId<S extends ServiceId> = {
    [K in RequestEndpointId<S>]: RequestData<S, K> extends EmptyObject ? K : never;
}[RequestEndpointId<S>];

export type DataRequestId<S extends ServiceId> = {
    [K in RequestEndpointId<S>]: RequestData<S, K> extends EmptyObject ? never : K;
}[RequestEndpointId<S>];

export type GenericRequestCommand = {
    messageId: string;
    commandId: string;
    data?: Record<string, unknown>;
};
