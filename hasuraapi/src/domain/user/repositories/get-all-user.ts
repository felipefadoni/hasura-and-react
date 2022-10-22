import { createSubscriptionObservable } from "@/infra/hasura";
import gql from "graphql-tag";

export default function getAllUserRepository() {
  const SUBSCRIBE_QUERY = gql`
    subscription {
      user {
        id
        name
        email
      }
    }
  `;

  return createSubscriptionObservable(SUBSCRIBE_QUERY);
}
