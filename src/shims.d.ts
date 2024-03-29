// these are just some copy pasted shims from the outputed index.d.ts file, intended for generated-helpers.ts to make it easier to dev them

interface SystemDisconnectRequest {
    messageId: string;
    commandId: "system/disconnect/request";
    data?: {
        reason: string;
    };
}

type SystemDisconnectResponse =
    | {
          messageId: string;
          commandId: "system/disconnect/response";
          status: "success";
      }
    | {
          messageId: string;
          commandId: "system/disconnect/response";
          status: "failed";
          reason: "internal_error";
      }
    | {
          messageId: string;
          commandId: "system/disconnect/response";
          status: "failed";
          reason: "unauthorized";
      }
    | {
          messageId: string;
          commandId: "system/disconnect/response";
          status: "failed";
          reason: "invalid_command";
      };

declare interface Tachyon {
    system: {
        disconnect: {
            request: SystemDisconnectRequest;
            response: SystemDisconnectResponse;
        };
    };
}
