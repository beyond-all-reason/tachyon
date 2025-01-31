All things about messages, typically chats between players.

Sending a message is done with the `messaging/send` request. When the sender
gets a successful response that means the message has been acked by the server
and it'll do its best to send it to the recipient(s).

There is no guarantee that the message has been actually received by the other
player, if, for example, the recipient disconnects at the same time the message
is received. A message can only be sent to online players. There is no support
to store messages to be then delivered later. In short, we're not building
whatsapp or discord.

Message are received through an event `messaging/received`. This means the server
has no way to guarantee a client acked a message. Each message contains a
special `marker` to allow some form of history seeking.

To receive messages, a client first has to subsribe to a given source. For now
the only supported source is `player` and means direct message from other
players.
The argument `since` is there as an option to ask the server some historical
events.
* `from_start` means the server will send its entire buffer.
* `latest` means the server will not send any potentially stored messages, only
  messages delivered after the subscription takes effect.
* `marker` with a corresponding value means the server will deliver all stored
  messages that have been sent *after* the message designated by the marker.
  This marker should be treated as an opaque value.
