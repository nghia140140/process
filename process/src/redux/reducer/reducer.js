import { combineReducers } from "redux";
import dataFarm from "./reducerFarm";
import dataFarmseason from "./reducerFarmseason";
import seasonProcesses from "./reducerProcess";

const reducer = combineReducers({
  dataFarm: dataFarm,
  dataFarmseason: dataFarmseason,
  seasonProcesses: seasonProcesses,
});
export default reducer;
