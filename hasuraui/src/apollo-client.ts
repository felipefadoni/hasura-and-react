import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

export const apolloClient = new ApolloClient({
  link: new WebSocketLink({
    uri: "ws://localhost:8080/v1/graphql",
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          "x-hasura-admin-secret": `${import.meta.env.VITE_SECRET_HASURA}`,
        },
      },
    },
  }),
  cache: new InMemoryCache(),
});
