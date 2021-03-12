export function addFarmseason(data) {
  return {
    type: "ADD_FARMSEASON",
    data,
  };
}

export function updateIdFarm(data) {
  return {
    type: "UPDATE_ID",
    data,
  };
}