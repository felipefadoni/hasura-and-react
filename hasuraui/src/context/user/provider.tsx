import { localStorageHelper } from "@/helpers";
import { User } from "@/services/api/domain/user/create-user";
import { ReactNode, useEffect, useReducer } from "react";
import { INITIAL_STATE, UserContext } from ".";
import { userReducer, UserReducerActionType } from "./reducer";

type Props = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const handleSetUser = (user: User, token: string) => {
    dispatch({
      type: UserReducerActionType.SET_AUTHENTICATION,
      payload: { user, token },
    });
  };

  const isAuthenticated = (): boolean => !!state.token;

  useEffect(() => {
    const user = localStorageHelper.getUser();
    const token = localStorageHelper.getToken();
    if (user && token) handleSetUser(user, token);
  }, []);

  return (
    <UserContext.Provider value={{ state, handleSetUser, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};
