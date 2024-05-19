export type TachyonMeta = typeof tachyonMeta.schema;
export type TachyonActor = keyof TachyonMeta;
export type TachyonCommandType = TachyonCommand["type"];

export type TachyonRequest = Extract<TachyonCommand, { type: "request" }>;
export type TachyonResponse = Extract<TachyonCommand, { type: "response" }>;
export type TachyonEvent = Extract<TachyonCommand, { type: "event" }>;

export type GetCommandIds<
    Sender extends TachyonActor = TachyonActor,
    Receiver extends TachyonActor = TachyonActor,
    Type extends TachyonCommandType = TachyonCommandType,
> = ExcludeEmptyArray<TachyonMeta[Sender][Type]["send"]>[number] & ExcludeEmptyArray<TachyonMeta[Receiver][Type]["receive"]>[number];

export type GetCommands<
    Sender extends TachyonActor = TachyonActor,
    Receiver extends TachyonActor = TachyonActor,
    Type extends TachyonCommandType = TachyonCommandType,
    CommandId extends GetCommandIds<Sender, Receiver, Type> = GetCommandIds<Sender, Receiver, Type>,
> = Extract<TachyonCommand, { type: Type; commandId: CommandId }>;

export type GetCommandData<C extends TachyonCommand> = C extends { data: infer D } ? D : never;

// TODO: move this to jaz-ts-utils
type ExcludeEmptyArray<T> = T extends readonly unknown[]
    ? T["length"] extends 0
        ? never
        : T
    : T extends unknown[]
      ? T["length"] extends 0
          ? never
          : T
      : never;
