import { combineReducers } from "redux";
import dataFarm from "./reducerFarm";
import dataFarmseason from "./reducerFarmseason";
import seasonProcesses from "./reducerProcess";
import dataCultivation from "./reducerCultivation";
import profile from "./reducerProfile";
import decodeData from "./reducerDecode.js";

const reducer = combineReducers({
  dataFarm: dataFarm,
  dataFarmseason: dataFarmseason,
  seasonProcesses: seasonProcesses,
  dataCultivation: dataCultivation,
  profile: profile,
  decodeData: decodeData,
});
export default reducer;
