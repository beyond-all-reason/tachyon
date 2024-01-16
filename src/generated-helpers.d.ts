import { EmptyObject } from "type-fest";

export type ServiceId = keyof Tachyon;
export type EndpointId<S extends ServiceId> = keyof Tachyon[S];
export type Command<S extends ServiceId, E extends EndpointId<S>> = Tachyon[S][E];

export type RequestId<S extends ServiceId> = {
    [K in EndpointId<S>]: Request<S, K> extends never ? never : K;
}[EndpointId<S>];

export type ResponseId<S extends ServiceId> = {
    [K in EndpointId<S>]: Response<S, K> extends never ? never : K;
}[EndpointId<S>];

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
    [K in RequestId<S>]: RequestData<S, K> extends EmptyObject ? K : never;
}[RequestId<S>];

export type DataRequestId<S extends ServiceId> = {
    [K in RequestId<S>]: RequestData<S, K> extends EmptyObject ? never : K;
}[RequestId<S>];

export type GenericRequestCommand = {
    messageId: string;
    commandId: string;
    data?: Record<string, unknown>;
};
