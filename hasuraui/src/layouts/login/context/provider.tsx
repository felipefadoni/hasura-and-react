import { FormEvent, ReactNode, useCallback, useReducer } from "react";
import { INITIAL_STATE, LoginContext } from ".";
import { appLoginReducer, AppLoginReducerActionTypes } from "./reducer";

type Props = {
  children: ReactNode;
};

export const LoginContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appLoginReducer, INITIAL_STATE);

  const handleChangeLogin = useCallback(
    (value: string, type: AppLoginReducerActionTypes) => {
      dispatch({ type, payload: value });
    },
    []
  );

  const handleChangeNewUser = useCallback(
    (value: string, type: AppLoginReducerActionTypes) => {
      dispatch({
        type,
        payload: value,
      });
    },
    []
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement> | undefined) => {
      e && e.preventDefault();

      console.log(state);
    },
    [state]
  );

  return (
    <LoginContext.Provider
      value={{ state, handleChangeLogin, handleChangeNewUser, handleSubmit }}
    >
      {children}
    </LoginContext.Provider>
  );
};
