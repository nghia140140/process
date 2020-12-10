import { combineReducers } from "redux";
import dataFarm from "./reducerFarm";
import dataFarmseason from "./reducerFarmseason";

const reducer = combineReducers({
  dataFarm: dataFarm,
  dataFarmseason: dataFarmseason,
});
export default reducer;
