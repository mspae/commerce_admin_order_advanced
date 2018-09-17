import {
  createStore as createReduxStore,
  applyMiddleware,
  combineReducers
} from "redux";
import thunk from "redux-thunk";
import { reducer as api, setAxiosConfig } from "redux-json-api";
import { apiEndpoint } from "./env";

export const createStore = () => {
  const reducer = combineReducers({
    api
  });

  const store = createReduxStore(reducer, applyMiddleware(thunk));

  store.dispatch(
    setAxiosConfig({
      baseURL: apiEndpoint
    })
  );
  return store;
};
