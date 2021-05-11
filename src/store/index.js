import { combineReducers, createStore } from "redux";
import userReducer from "./slices/userSlice";
import courseReducer from "./slices/courseSlice";
import authorReducer from "./slices/authorSlice";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  userReducer,
  courseReducer,
  authorReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(),
});

export default store;
