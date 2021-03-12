
const defaultState = {};
const idFarm = (state = defaultState, action) => {
  if (action.type === "UPDATE_ID") {
    console.log("data");
    console.log(action.data);
    return action.data;
  }
  return state;
};
export default idFarm;