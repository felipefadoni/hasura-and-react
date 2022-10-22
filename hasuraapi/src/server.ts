import { DocumentNode, execute } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import cors from "cors";
import express from "express";
import gql from "graphql-tag";
import http from "http";
import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { SubscriptionClient } from "subscriptions-transport-ws";
import ws from "ws";

const app = express();

app.use(cors());

const getWsClient = function (wsurl: string) {
  const client = new SubscriptionClient(
    wsurl,
    {
      reconnect: true,
      connectionParams: {
        headers: {
          "x-hasura-admin-secret": "102030",
        },
      },
    },
    ws
  );
  return client;
};

const createSubscriptionObservable = (
  wsurl: string,
  query: DocumentNode,
  variables = undefined
) => {
  const link = new WebSocketLink(getWsClient(wsurl));
  return execute(link, { query: query, variables: variables });
};

const SUBSCRIBE_QUERY = gql`
  subscription {
    user {
      id
      name
      email
    }
  }
`;

function main(
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) {
  const subscriptionClient = createSubscriptionObservable(
    "ws://localhost:8080/v1/graphql",
    SUBSCRIBE_QUERY
  );

  subscriptionClient.subscribe(
    (eventData) => {
      socket.emit("users", eventData.data);
    },
    (err) => {
      console.log("Err");
      console.log(err);
    }
  );
}

const server = http.createServer(app);

const socketServer = new Server(server, {
  transports: ["websocket"],
  cors: {
    origin: "*",
  },
  pingTimeout: 180000,
  pingInterval: 1000,
});

socketServer.on("connection", (socket) => {
  console.log("New client connected", socket.id);
  socket.emit("message", main(socket));
  socket.on("disconnect", () => console.log("Client disconnected"));
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

server.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
