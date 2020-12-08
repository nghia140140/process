import { combineReducers } from "redux";
import isAddingReducer from "./test";
import dataFarm from "./reducerFarm";

const reducer = combineReducers({
  dataFarm: dataFarm,
});
export default reducer;
