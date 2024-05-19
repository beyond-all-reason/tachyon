# Commands

JSON messages in this protocol are referred to as "commands".

Every command shares the following properties:

| Property   | Type   | Description                                                                           |
| ---------- | ------ | ------------------------------------------------------------------------------------- |
| messsageId | string | A unique identifier for a pair of request/response commands which links them together |
| commandId  | string | The identifier of this command's type, e.g. `lobby/create/request`                    |

## Requests

Request commands can be sent from either side, and expect the other side to send a correlating response command. They are typically used when asking the other side to perform an action or fetch some data which they require, or simply to acknowledge their request has been fulfilled.

Every request command contains these additional properties:

| Property        | type   | Description                                      |
| --------------- | ------ | ------------------------------------------------ |
| data (optional) | object | A object containing data specific to the command |

## Responses

Sent in response to a request.

Every response command contains these additional properties:

| Property                       | type                  | Description                                                                                              |
|--------------------------------|-----------------------|----------------------------------------------------------------------------------------------------------|
| status                         | "success" \| "failed" | A object containing data specific to the command. This may be omitted if the command does not require it |
| data (optional)                | object                | Command-specific data object. Only present for "success" responses                                       |
| reason (if status is "failed") | string                | An error code only present for "failed" responses                                                        |

All `failed` responses that are initiated by a request can return one of the following `reason`s, even though not explicitly defined in each command's definition file:

| Reason                | Description                                                                                |
|-----------------------|--------------------------------------------------------------------------------------------|
| unauthorized          | When a client sends a request command of which they do not have the `role` required to use |
| internal_error        | When the server fails to handle the request in some way                                    |
| invalid_request       | When the request command doesn't match the schema                                          |
| command_unimplemented | When the server hasn't implemented a response handler for the command                      |

## Events

Events are commands which require no response. They are typically sent when the sending party does not care if the message has been acted upon, such as the server sending periodic update data.

Every event command contains these additional properties:

| Property        | type   | Description                                      |
| --------------- | ------ | ------------------------------------------------ |
| data (optional) | object | A object containing data specific to the command |