All things about messages, typically chats between players.

Sending a message is done with the `messaging/send` request. When the sender
gets a successful response that means the message has been acked by the server
and it'll do its best to send it to the recipient(s).
The server will then send an event `messaging/received` to the recipient(s).
If the recipient is not online, the sender gets the error response `not_connected`.

There is no guarantee that the message has been actually received by the other
player, if, for example, the recipient disconnects at the same time the message
is received. A message can only be sent to online players. There is no support
to store messages to be then delivered later. In short, we're not building
whatsapp or discord.
