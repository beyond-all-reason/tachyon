## Modes

For now, we're only caring about the slaved mode, as it's a lot more work to implement dedicated mode and might not be necessary until we get a lot more players. Dedicated mode might not be ever realized.

All commands that are currenty defined are for the slaved mode of operation, there is nothing in place for dedicated one.

### Dedicated

Communication from players goes directly to the autohost.

#### Pros

-   Lightens the load on the Tachyon server and makes scaling easier
-   Improved latency for players as messages don't need to be sent through a middleman server
-   Players in existing battles can keep playing games there even if the Tachyon server goes down

#### Cons

-   Tachyon server becomes unaware of activity taking place in battles directly, meaning any additional desired functionality such as telemetry or message logging would need to be implemented separately

### Slaved

The Tachyon server acts as a middleman to broker messages between players and the autohost.

#### Pros

-   The Tachyon server effectively has full control over the autohost, making it possible to interject communications which could be useful for various reasons
-   The autohost's implementation has the potential to be much simpler, as the Tachyon server could handle all the pre-game communications and only interface with the autohost when launching the game and putting it in touch with the players

#### Cons

-   The Tachyon server has to do more heavy lifting for custom games, where lots of comms can take place before the game begins
-   Increased Tachyon server load/bandwidth
-   If the Tachyon server goes down, all the existing lobbies (pre-game battles) will also go down

## Matchmaking

Autohosts used for matchmaking should use the slaved mode as no pregame communication between players and the autohost is required. The Tachyon server can dictate the battle's settings, start new game on autohost with those parameters and send connetion details to players.

## Custom Battles

Autohosts used for custom games should use the dedicated mode as lots of pregame communication can take place.
