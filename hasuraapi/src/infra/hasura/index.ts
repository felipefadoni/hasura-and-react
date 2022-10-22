import { env } from "@/config";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { DocumentNode, execute, GraphQLRequest } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import fetch from "cross-fetch";
import { SubscriptionClient } from "subscriptions-transport-ws";
import ws from "ws";

const getSubscriptionClient = function () {
  const client = new SubscriptionClient(
    env.hasuraUrlWs,
    {
      reconnect: true,
      connectionParams: {
        headers: {
          "x-hasura-admin-secret": env.hasuraSecret,
        },
      },
    },
    ws
  );
  return client;
};

export const createSubscriptionObservable = (
  query: DocumentNode,
  variables?: any
) => {
  const link = new WebSocketLink(getSubscriptionClient());

  const operation: GraphQLRequest = {
    query,
    variables,
  };

  return execute(link, { ...operation });
};

export const apolloClient = new ApolloClient({
  uri: env.hasuraUrlHttp,
  fetch,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": env.hasuraSecret,
  },
});
