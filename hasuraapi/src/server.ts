import "express-async-errors";

import "./config/module-alias";

import { env, logger } from "./config";

import http from "http";
import { app } from "./infra/http";
import configSocketIo from "./infra/socket-io/socket";

enum ExitStatus {
  Success = 0,
  Error = 1,
}

const server = http.createServer(app);
server.keepAliveTimeout = 60 * 1000 + 1000;
server.headersTimeout = 60 * 1000 + 2000;

configSocketIo(server);

server.listen(env.port, () =>
  logger.info(`Server is online, Version: 0.0.1, ON PORT: ${env.port}`)
);

const exitSignals = ["SIGINT", "SIGTERM", "SIGQUIT"];
exitSignals.map((sig) =>
  process.on(sig, () => {
    try {
      server.close();
      logger.info(`App exited with success`);
      process.exit(ExitStatus.Success);
    } catch (error) {
      logger.error(`App exited with error: ${error}`);
      process.exit(ExitStatus.Error);
    }
  })
);

process.on("unhandledRejection", (reason, promise) => {
  logger.error(
    "App exiting due to an unhandled promise:",
    promise,
    "reason:",
    reason
  );
  throw reason;
});

process.on("uncaughtException", (error) => {
  logger.error("App exiting due to an uncaught exception:", error);
  process.exit(ExitStatus.Error);
});
