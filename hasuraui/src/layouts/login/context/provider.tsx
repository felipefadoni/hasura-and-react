import { useUser } from "@/context/user/hook";
import { localStorageHelper } from "@/helpers";
import { authenticateUser, createUser } from "@/services/api/domain/user";
import { FormEvent, ReactNode, useCallback, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { INITIAL_STATE, LoginContext } from ".";
import { appLoginReducer, AppLoginReducerActionTypes } from "./reducer";

type Props = {
  children: ReactNode;
};

export const LoginContextProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const { handleSetUser } = useUser();
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
    async (e: FormEvent<HTMLFormElement> | undefined) => {
      e && e.preventDefault();

      const user = state.newUser;

      const userCreated = await createUser({
        email: user.email,
        password: user.password,
        name: user.firstName,
        last_name: user.lastName,
      });

      dispatch({ type: AppLoginReducerActionTypes.RESET_NEW_USER });

      handleSetUser(userCreated.user, userCreated.token);

      localStorageHelper.setUser(userCreated.user);
      localStorageHelper.setToken(userCreated.token);

      navigate("/chat");
    },
    [state]
  );

  const handleSubmitLogin = useCallback(
    async (e: FormEvent<HTMLFormElement> | undefined) => {
      e && e.preventDefault();

      const userAuthenticated = await authenticateUser({
        email: state.email,
        password: state.password,
      });

      handleSetUser(userAuthenticated.user, userAuthenticated.token);

      localStorageHelper.setUser(userAuthenticated.user);
      localStorageHelper.setToken(userAuthenticated.token);

      navigate("/chat");
    },
    [state]
  );

  return (
    <LoginContext.Provider
      value={{
        state,
        handleChangeLogin,
        handleChangeNewUser,
        handleSubmit,
        handleSubmitLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
