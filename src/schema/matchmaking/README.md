The matchmaking cycle works as follows:

1. Clients should first retrieve a list of all the available queues from the server using [list](#list).
2. Clients should then queue for one or more of these queues by sending an array of the queue ids in a [queue](#queue) request.
3. The server can send periodic updates about the status of the search as a [queueUpdate](#queueupdate) event.
4. When a match is found, the server should send a [found](#found) event along with the id of the queue of the found match.
5. Clients can then ready up by sending a [ready](#ready) request. The number of readied players should be sent to clients via the [foundUpdate](#foundupdate) event.
6. To cancel queueing, or to decline a found match, clients should send a [cancel](#cancel) request. After a successful `cancel` response, the server will also send a [cancelled](#cancelled) event.
7. If a client fails to ready up for a found match, the server should send a [lost](#lost) event, and the queueing phase should resume.
8. Once all players are ready, the server should send a [autohost/battleStart](#autohost/battleStart) request to a suitable autohost client. If the autohost doesn't respond quickly, or if it sends a failed response, the server should repeat this step.
9. Once the autohost has successfully started the battle, the server should then send [battle/battleStart](#battle/battleStart) requests to the users.

The server may send [matchmaking/cancelled](#cancelled) event at any point after the client sent a [queue](#queue) request with a reason. This means the client has been booted out the matchmaking system. It can happen for example when a party member leaves, or in case of a server error that needs to reset the matchmaking state. This event is also sent after a successful [cancel](#cancel) request.

[matchmaking/cancelled](#cancelled) can have the following reasons:
* `intentional`: the player left matchmaking
* `server_error`: something bad happended and the server couldn't maintain
  state so it booted the player out. Retrying may fix the issue.
* `party_user_left`: a member of the player's party left matchmaking, thus
  forcing the entire party to withdraw
* `ready_timeout`: The player failed to accept a match within the given
  time window and is thus removed from the matchmaking system.
