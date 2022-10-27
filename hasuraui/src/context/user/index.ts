import { User } from "@/services/api/domain/user/create-user";
import { createContext } from "react";

export const INITIAL_STATE = {
  token: "",
  user: {
    name: "",
    last_name: "",
    email: "",
    created_at: "",
  },
};

export type InitialSateProps = typeof INITIAL_STATE;

export const UserContext = createContext({
  state: INITIAL_STATE,
  handleSetUser: (user: User, token: string) => {},
  isAuthenticated: (): boolean => false,
});
