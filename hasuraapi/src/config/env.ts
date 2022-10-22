import dotenv from "dotenv";
import path from "path";

const { NODE_ENV } = process.env;

const nodeEnv =
  process.env.NODE_ENV != null ? process.env.NODE_ENV : "localhost";

const getEnv = (): string => {
  switch (nodeEnv) {
    case "test":
      return path.resolve(__dirname, "..", "..", ".env-test");

    case "localhost":
      return path.resolve(__dirname, "..", "..", ".env");

    default:
      return path.resolve(__dirname, "..", "..", ".env");
  }
};

dotenv.config({
  path: getEnv(),
});

const { HASURA_SECRET, HASURA_URL_WS, HASURA_URL_HTTP, PORT } = process.env;

export default {
  nodeEnv: NODE_ENV ? NODE_ENV : "development",
  hasuraSecret: String(HASURA_SECRET),
  hasuraUrlWs: String(HASURA_URL_WS),
  hasuraUrlHttp: String(HASURA_URL_HTTP),
  port: Number(PORT),
};
