import { INITIAL_STATE } from ".";

export type UserReducerAction = {
  type: "SET_AUTHENTICATION";
  payload?: any;
};

export enum UserReducerActionType {
  SET_AUTHENTICATION = "SET_AUTHENTICATION",
}

export const userReducer = (
  state = INITIAL_STATE,
  action: UserReducerAction
) => {
  const actionsType = {
    SET_AUTHENTICATION: () => ({
      ...state,
      token: action.payload.token,
      user: action.payload.user,
    }),
  };

  return actionsType[action.type] ? actionsType[action.type]() : state;
};
