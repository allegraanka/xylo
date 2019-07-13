// use combinedReducer from redux to combine authReducer and errorReducer into one rootReducer
// define rootReducer

import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});