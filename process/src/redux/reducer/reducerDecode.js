import { FETCH_PROCESS, GET_PROCESS } from "../types/Farm/types";

const defaultState = {
  decodeData: [],
};

const decodeData = (state = defaultState, action) => {
  if (action.type === "DECODE") {
    console.log("reducer: ");
    console.log(action.data);
    return action.data;
  }
  return state;
};
export default decodeData;
