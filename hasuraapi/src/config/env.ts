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

const {
  HASURA_SECRET,
  HASURA_URL_WS,
  HASURA_URL_HTTP,
  PORT,
  DB_READ_HOST,
  DB_READ_DATABASE,
  DB_READ_USER,
  DB_READ_PASSWORD,
  DB_READ_PORT,
  DB_READ_CLIENT,
  DB_READ_POOL_MIN,
  DB_READ_POOL_MAX,
  DB_WRITE_HOST,
  DB_WRITE_DATABASE,
  DB_WRITE_USER,
  DB_WRITE_PASSWORD,
  DB_WRITE_PORT,
  DB_WRITE_CLIENT,
  DB_WRITE_POOL_MIN,
  DB_WRITE_POOL_MAX,
  CRYPTO_ALGORITHM,
  CRYPTO_PASSWORD,
  CRYPTO_SALT,
  CRYPTO_IV,
  JWT_SECRET,
} = process.env;

export default {
  nodeEnv: NODE_ENV ? NODE_ENV : "development",
  hasuraSecret: String(HASURA_SECRET),
  hasuraUrlWs: String(HASURA_URL_WS),
  hasuraUrlHttp: String(HASURA_URL_HTTP),
  port: Number(PORT),
  dbReadHost: String(DB_READ_HOST),
  dbReadDatabase: String(DB_READ_DATABASE),
  dbReadUser: String(DB_READ_USER),
  dbReadPassword: String(DB_READ_PASSWORD),
  dbReadPort: Number(DB_READ_PORT),
  dbReadClient: String(DB_READ_CLIENT),
  dbReadPoolMin: Number(DB_READ_POOL_MIN),
  dbReadPoolMax: Number(DB_READ_POOL_MAX),
  dbWriteHost: String(DB_WRITE_HOST),
  dbWriteDatabase: String(DB_WRITE_DATABASE),
  dbWriteUser: String(DB_WRITE_USER),
  dbWritePassword: String(DB_WRITE_PASSWORD),
  dbWritePort: Number(DB_WRITE_PORT),
  dbWriteClient: String(DB_WRITE_CLIENT),
  dbWritePoolMin: Number(DB_WRITE_POOL_MIN),
  dbWritePoolMax: Number(DB_WRITE_POOL_MAX),
  cryptoAlgorithm: String(CRYPTO_ALGORITHM),
  cryptoPassword: String(CRYPTO_PASSWORD),
  cryptoSalt: Number(CRYPTO_SALT),
  cryptoIv: Number(CRYPTO_IV),
  jwtSecret: String(JWT_SECRET),
};
