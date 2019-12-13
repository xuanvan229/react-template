import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import app from "../../pages";
import * as combine from "../../utils/config";
import { baseApp } from "./baseReducer";
const combineReduce = combine.combineReducer(app);
const rootReducer = (history) =>
  combineReducers({
    ...combineReduce,
    router: connectRouter(history),
    baseApp,
  });

export default rootReducer;
