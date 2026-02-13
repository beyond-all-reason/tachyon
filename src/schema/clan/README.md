Clans are a permanent kind of [party](https://github.com/beyond-all-reason/tachyon/blob/master/docs/schema/party.md) with additional features.

A clan has a profil which includes several information like tag, name, description.

### Manage clan

Every user is allowed to create a clan with [clan/create](#create). Then he is the clan leader. The clan leader is the only one who is allowed to delete the clan with the request [clan/delete](#delete).

Clan leader and clan co-leaders are able to update the profile [clan/update](#update).

Clan leader and clan co-leaders are allowed to invite different players with [clan/invite](#invite). (There are no limitations of the count of members.) The invitation can be cancelled by [clan/cancelInvite](#cancelinvite). Invited players can accept invitiation by [aclan/cceptInvite](#acceptinvite) and decline by [clan/declineInvite](#declineinvite).

Only the clan-leader is able to kick members by [clan/kickMember](#kickmember). Similarly, any member can leave the clan they are currently in with [clan/leave](#leave).

The clan leader is allowed to appoint members as clan co-leader with [clan/setRole](#setrole). The clan leader has also the possibility to transfer his leadership role to a different member with the same command. (ATTENTION: By executing this command the clan leader loses his permissions!)

### Special use cases

If the clan-leader leaves the clan by clan/leave the oldest co-leader is set as new clan leader. If no co-leader exist the oldest member is set as new clan leader.

If the clan-leader leaves the clan and he is the last member the clan will be removed.