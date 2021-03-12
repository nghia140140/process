
const defaultState = {};
const addFarmseason = (state = defaultState, action) => {
  if (action.type === "ADD_FARMSEASON") {
    console.log("data");
    console.log(action.data);
    return action.data;
  }
  return state;
};
export default addFarmseason;