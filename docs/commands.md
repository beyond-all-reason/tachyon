# Commands

Both request and response messages are referred to as "commands". A request command should always be met with a corresponding response command, however, in some cases, the server can send standalone response commands which the client did not initiate with a request. An exaple is the [`system/connected/response`](docs/system.md/#connected).

## Shared

Every command shares the following properties:

| Property   | Type   | Description                                                                           |
| ---------- | ------ | ------------------------------------------------------------------------------------- |
| messsageId | string | A unique identifier for a pair of request/response commands which links them together |
| commandId  | string | The identifier of this command's type, e.g. `lobby/create/request`                    |

## Requests

Every request command contains these additional properties:

| Property        | type   | Description                                                                                              |
| --------------- | ------ | -------------------------------------------------------------------------------------------------------- |
| data (optional) | object | A object containing data specific to the command. This may be omitted if the command does not require it |

## Responses

Every response command contains these additional properties:

| Property                       | type                  | Description                                                                                              |
|--------------------------------|-----------------------|----------------------------------------------------------------------------------------------------------|
| status                         | "success" \| "failed" | A object containing data specific to the command. This may be omitted if the command does not require it |
| data (optional)                | object                | Command-specific data object. Only present for "success" responses                                       |
| reason (if status is "failed") | string                | An error code only present for "failed" responses                                                        |

All `failed` responses that are initiated by a request can return one of the following `reason`s, even though not explicitly defined in each command's definition file:

| Reason          | Description                                                                                |
| --------------- | ------------------------------------------------------------------------------------------ |
| unauthorized    | When a client sends a request command of which they do not have the `role` required to use |
| internal_error  | When the server fails to handle the request in some way, typically sent in a `catch` block |
| invalid_command | When the request command doesn't match the schema                                          |
