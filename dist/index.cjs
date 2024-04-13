"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/compiled.ts
var compiled_exports = {};
__export(compiled_exports, {
  tachyonMeta: () => tachyonMeta
});
module.exports = __toCommonJS(compiled_exports);

// src/meta.ts
var tachyonMeta = {
  "version": "1.3.0",
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tachyonMeta
});
