The matchmaking cycle works as follows:

1. Clients should first retrieve a list of all the available queues from the server using [list](#list).
2. Clients should then queue for one or more of these queues by sending an array of the queue ids in a [queue](#queue) request.
3. The server should send periodic updates about the total number of clients in at least one of the same queues as the queued client as a [queueUpdate](#queueupdate) response.
4. When a match is found, the server should send a [found](#found) response along with the id of the queue of the found match.
5. Clients can then ready up by sending a [ready](#ready) request. The number of readied players should be sent to clients via the [readyUpdate](#readyupdate) response.
6. To cancel queueing, or to decline a found match, clients should send a [cancel](#cancel) request.
7. If a client fails to ready up for a found match, the server should send a [lost](#lost) response, and the queueing phase should resume.
