import AssetsReducer from "./reducers";
import { combineReducers } from "redux";
const appReducer = combineReducers({
  Assets: AssetsReducer,
});
export default appReducer;
