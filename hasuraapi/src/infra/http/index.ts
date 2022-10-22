import cors from "cors";
import express from "express";
import gql from "graphql-tag";
import { apolloClient } from "../hasura";

const app = express();

app.use(cors());

app.get("/", async (_req, res) => {
  const getUsers = await apolloClient.query({
    query: gql`
      query getUsers($id: uuid!) {
        user(where: { id: { _eq: $id } }) {
          id
          name
          email
        }
      }
    `,
    variables: {
      id: "db291d57-95b1-43b1-9924-47cdf36b2c64",
    },
  });

  const date = new Date().toUTCString();

  res.json({ message: "Server started!", date, user: getUsers.data.user });
});

export { app };
