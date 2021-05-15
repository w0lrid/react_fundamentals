import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import courseReducer from "./reducers/courseReducer";
import authorReducer from "./reducers/authorReducer";

/* import userReducer from "./slices/userSlice";
import courseReducer from "./slices/courseSlice";
import authorReducer from "./slices/authorSlice";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"; */

const rootReducer = combineReducers({
  // userReducer,
  courseReducer,
  authorReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
