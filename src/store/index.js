import { combineReducers, createStore } from "redux";
import userReducer from "./slices/userSlice";
import courseReducer from "./slices/courseSlice";
import authorReducer from "./authors/reducer";

const rootReducer = combineReducers({
  userReducer,
  courseReducer,
  authorReducer,
});

const store = createStore(rootReducer);

export default store;
