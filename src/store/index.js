import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import courseReducer from "./reducers/courseReducer";
import authorReducer from "./reducers/authorReducer";

const rootReducer = combineReducers({
  userReducer,
  courseReducer,
  authorReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
