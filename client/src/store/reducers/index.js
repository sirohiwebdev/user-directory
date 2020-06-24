import { combineReducers } from "redux";
import usersReducer from "./users";
import statusReducer from "./errors";

const rootReducer = combineReducers({
  users: usersReducer,
  status: statusReducer
});

export default rootReducer;
