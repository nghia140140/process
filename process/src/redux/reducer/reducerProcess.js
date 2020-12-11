import { FETCH_PROCESS, GET_PROCESS } from "../types/Farm/types";

// {
//   id: 852,
//   name: "Season Process 1",
//   note: "Note Season Process",
//   description: "Description Season Process",
//   stepsNumber: 3,
//   interval: 3,
//   status: "WAITING",
//   startDate: "2020-12-17T00:00:00Z",
//   endDate: "2021-02-17T00:00:00Z",
//   ratings: "EXCELLENT",
//   cultivationProcessId: null,
//   farmingSeasonId: 802,
//   seasonProcessSteps: [],
// },
const defaultState = {
  seasonProcesses: [],
};
const seasonProcesses = (state = defaultState, action) => {
  if (action.type ===  "FETCH_PROCESS" ) {
    console.log("data");
    console.log(action.data);
    return { seasonProcesses: action.data };
  }
  if (action.type === { GET_PROCESS }) return state;
  return state;
};
export default seasonProcesses;
