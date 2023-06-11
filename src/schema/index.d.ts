import { AccountService } from "src/schema/account";

import { DefineTachyonSchema } from "../helpers";
import { AuthService } from "./auth";
import { ClanService } from "./clan";
import { CommunicationService } from "./communication";
import { ConfigService } from "./config";
import { InitService } from "./init";
import { ListenerService } from "./listener";
import { LobbyService } from "./lobby";
import { LobbyChatService } from "./lobby-chat";
import { LobbyHostService } from "./lobby-host";
import { MatchmakingService } from "./matchmaking";
import { ModerationService } from "./moderation";
import { NewsService } from "./news";
import { PartyService } from "./party";
import { SystemService } from "./system";
import { TelemetryService } from "./telemetry";

export type Tachyon = DefineTachyonSchema<{
    account: AccountService;
    auth: AuthService;
    clan: ClanService;
    communication: CommunicationService;
    config: ConfigService;
    init: InitService;
    listener: ListenerService;
    lobbyChat: LobbyChatService;
    lobbyHost: LobbyHostService;
    lobby: LobbyService;
    matchmaking: MatchmakingService;
    moderation: ModerationService;
    news: NewsService;
    party: PartyService;
    system: SystemService;
    telemetry: TelemetryService;
}>;
