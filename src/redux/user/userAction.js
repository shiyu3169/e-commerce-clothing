import UseActionTypes from "./userTypes";

export const setCurrentUser = user => ({
  type: UseActionTypes.SET_CURRENT_USER,
  payload: user
});
