import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const initialState = { };

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk), devTools)
);

export default store;
