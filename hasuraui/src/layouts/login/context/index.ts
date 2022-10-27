import { createContext, FormEvent } from "react";
import { AppLoginReducerActionTypes } from "./reducer";

export const INITIAL_STATE = {
  email: "",
  password: "",
  loading: false,
  error: "",
  newUser: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  },
};

export type InitialSateProps = typeof INITIAL_STATE;

export const LoginContext = createContext({
  state: INITIAL_STATE,
  handleChangeLogin: (value: string, type: AppLoginReducerActionTypes) => {},
  handleChangeNewUser: (value: string, type: AppLoginReducerActionTypes) => {},
  handleSubmit: (e: FormEvent<HTMLFormElement> | undefined) => {},
  handleSubmitLogin: (e: FormEvent<HTMLFormElement> | undefined) => {},
});
