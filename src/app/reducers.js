import { combineReducers } from "redux";
import { userSlice } from "../features/userSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});
