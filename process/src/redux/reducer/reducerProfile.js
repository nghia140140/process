import { FETCH_PROCESS, GET_PROCESS } from "../types/Farm/types";

const defaultState = {};
const profile = (state = defaultState, action) => {
  // if (action.type === "LOGIN") {
  //   return { ...state, token: action.token, isLogin: true };
  // }
  // if (action.type === "LOGOUT") return {};
  // if (action.type === "DECODE") return { ...state, id: action.jti };
  if (action.type === "FETCH_PROFILE") {
    console.log("reducer: ");
    console.log(action.data);
    return action.data;
  }
  return state;
};
export default profile;
