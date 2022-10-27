import { env } from "@/config";
import knex, { Knex } from "knex";

interface ConnectProps {
  host: string;
  database: string;
  user: string;
  password: string;
  port: number;
  clientType: string;
  poolMin: number;
  poolMax: number;
}

const postgresRead = {
  client: null as unknown as Knex,
  host: null as unknown as string,
  database: null as unknown as string,
  user: null as unknown as string,
  password: null as unknown as string,
  port: null as unknown as number,
  clientType: null as unknown as string,
  poolMin: null as unknown as number,
  poolMax: null as unknown as number,

  async connect({
    database,
    host,
    password,
    poolMax,
    poolMin,
    port,
    user,
    clientType,
  }: ConnectProps): Promise<void> {
    this.client as Knex | null;
    this.host = host;
    this.database = database;
    this.user = user;
    this.password = password;
    this.port = port;
    this.clientType = clientType;
    this.poolMin = poolMin;
    this.poolMax = poolMax;

    this.client = knex({
      client: this.clientType,
      connection: {
        host: this.host,
        database: this.database,
        user: this.user,
        password: this.password,
        port: this.port,
      },
      pool: {
        min: poolMin,
        max: poolMax,
        acquireTimeoutMillis: 30000,
        createTimeoutMillis: 30000,
        idleTimeoutMillis: 30000,
        propagateCreateError: false,
      },
    });

    try {
      await this.client.raw("SELECT 1+1");
    } catch (erro) {
      throw new Error(`PostgresHelperRead: ${JSON.stringify(erro)}`);
    }
  },

  async disconnect(): Promise<void> {
    await this.client.destroy();
    this.client = null as unknown as Knex;
  },

  getInstance(): Knex {
    if (this.client) return this.client;

    this.connect({
      clientType: env.dbReadClient,
      database: env.dbReadDatabase,
      host: env.dbReadHost,
      password: env.dbReadPassword,
      poolMax: env.dbReadPoolMax,
      poolMin: env.dbReadPoolMin,
      port: env.dbReadPort,
      user: env.dbReadUser,
    });

    return this.client;
  },
};

export default postgresRead;
