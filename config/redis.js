"use strict";

const Env = use("Env");

module.exports = {
  connection: Env.get("REDIS_CONNECTION", "local"),

  local: {
    host: Env.get("REDIS_HOST"),
    port: 6379,
    password: null,
    db: 0,
    keyPrefix: "",
  },

  cluster: {
    clusters: [
      {
        host: Env.get("REDIS_HOST"),
        port: 6379,
        password: null,
        db: 0,
      },
      {
        host: Env.get("REDIS_HOST"),
        port: 6380,
        password: null,
        db: 0,
      },
    ],
  },
};
