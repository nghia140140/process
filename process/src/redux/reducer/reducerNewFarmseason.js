import { FETCH_FARM, GET_FARM } from "../types/Farm/types";
const defaultState = {};

const newFarmseason = (state = defaultState, action) => {
  if (action.type === "ADD_FARMSEASON") return action.data;
  if (action.type === "ADD_PROCESS") return {...state, seasonProcesses: action.data};
  // if (action.type === "ADD_FARM") return { state: state.concat(action.data) };
  return state;
};
export default newFarmseason;
