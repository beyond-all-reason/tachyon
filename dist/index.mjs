// src/meta.ts
var tachyonMeta = {
  "version": "1.5.3",
  "ids": {
    "autohost": {
      "slave": [
        "request",
        "response"
      ],
      "unslave": [
        "request",
        "response"
      ]
    },
    "game": {
      "launch": [
        "response"
      ]
    },
    "lobby": {
      "close": [
        "request",
        "response"
      ],
      "create": [
        "request",
        "response"
      ],
      "join": [
        "request",
        "response"
      ],
      "joined": [
        "response"
      ],
      "leave": [
        "request",
        "response"
      ],
      "left": [
        "response"
      ],
      "list": [
        "request",
        "response"
      ],
      "receiveMessage": [
        "response"
      ],
      "sendMessage": [
        "request",
        "response"
      ],
      "subscribe": [
        "request",
        "response"
      ],
      "unsubscribe": [
        "request",
        "response"
      ],
      "updated": [
        "response"
      ]
    },
    "matchmaking": {
      "cancel": [
        "request",
        "response"
      ],
      "found": [
        "response"
      ],
      "list": [
        "request",
        "response"
      ],
      "lost": [
        "response"
      ],
      "queue": [
        "request",
        "response"
      ],
      "queueUpdate": [
        "response"
      ],
      "ready": [
        "request",
        "response"
      ],
      "readyUpdate": [
        "response"
      ]
    },
    "system": {
      "connected": [
        "response"
      ],
      "disconnect": [
        "request",
        "response"
      ],
      "serverStats": [
        "request",
        "response"
      ]
    },
    "user": {
      "subscribe": [
        "request",
        "response"
      ],
      "unsubscribe": [
        "request",
        "response"
      ],
      "updated": [
        "response"
      ]
    }
  }
};
export {
  tachyonMeta
};
