import { InitialSateProps, INITIAL_STATE } from ".";

export type AppLoginReducerAction = {
  type:
    | "SET_EMAIL"
    | "SET_PASSWORD"
    | "SET_REMEMBER"
    | "SET_LOADING"
    | "SET_ERROR"
    | "NEW_USER_SET_FIRST_NAME"
    | "NEW_USER_SET_LAST_NAME"
    | "NEW_USER_SET_EMAIL"
    | "NEW_USER_SET_PASSWORD"
    | "RESET_NEW_USER";
  payload?: InitialSateProps | any;
};

export enum AppLoginReducerActionTypes {
  NEW_USER_SET_FIRST_NAME = "NEW_USER_SET_FIRST_NAME",
  NEW_USER_SET_LAST_NAME = "NEW_USER_SET_LAST_NAME",
  NEW_USER_SET_EMAIL = "NEW_USER_SET_EMAIL",
  NEW_USER_SET_PASSWORD = "NEW_USER_SET_PASSWORD",
  SET_EMAIL = "SET_EMAIL",
  SET_PASSWORD = "SET_PASSWORD",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
  RESET_NEW_USER = "RESET_NEW_USER",
}

export const appLoginReducer = (
  state = INITIAL_STATE,
  action: AppLoginReducerAction
) => {
  const actionsType = {
    SET_EMAIL: () => ({ ...state, email: action.payload }),
    SET_PASSWORD: () => ({ ...state, password: action.payload }),
    SET_REMEMBER: () => ({ ...state, remember: action.payload }),
    SET_LOADING: () => ({ ...state, loading: action.payload }),
    SET_ERROR: () => ({ ...state, error: action.payload }),
    NEW_USER_SET_FIRST_NAME: () => ({
      ...state,
      newUser: { ...state.newUser, firstName: action.payload },
    }),
    NEW_USER_SET_LAST_NAME: () => ({
      ...state,
      newUser: { ...state.newUser, lastName: action.payload },
    }),
    NEW_USER_SET_EMAIL: () => ({
      ...state,
      newUser: { ...state.newUser, email: action.payload },
    }),
    NEW_USER_SET_PASSWORD: () => ({
      ...state,
      newUser: { ...state.newUser, password: action.payload },
    }),
    RESET_NEW_USER: () => ({ ...state, newUser: INITIAL_STATE.newUser }),
  };

  return actionsType[action.type] ? actionsType[action.type]() : state;
};
