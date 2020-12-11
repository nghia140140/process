import { FETCH_PROCESS, GET_PROCESS } from "../types/Farm/types";

const defaultState = {
  id: "",
  name: "",
  username: "",
  email: "",
  token: "",
  isLogin: false,
};
const profile = (state = defaultState, action) => {
  if (action.type === "LOGIN") {
    console.log("data");
    console.log(action.data);
    return { ...state, token: action.token, isLogin: true };
  }
  if (action.type === "LOGOUT") return { ...state, token: "", isLogin: false };
  if (action.type === "DECODE") return { ...state, id: action.jti };
  return state;
};
export default profile;
