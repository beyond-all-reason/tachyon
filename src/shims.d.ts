declare type Tachyon = Record<
    string,
    Record<
        string,
        | {
              messageId: string;
              commandId: string;
              data: Record<string, unknown> | EmptyObject;
          }
        | {
              messageId: string;
              commandId: string;
              status: "success";
              data?: Record<string, unknown> | EmptyObject;
          }
    >
>;
