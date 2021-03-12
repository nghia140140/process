import * as URL from "../../../configs/Domain/index";
function addFarm(data) {
  return {
    type: "ADD_FARM",
    data,
  };
}

function addFarmPostData(data) {
  console.log(data);
  const token = localStorage.token;
  console.log(token);
  if (token) {
    return fetch(URL.ADD_FARM, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resJSON) => resJSON);

    // // dispatch(addFarm(data));
    // console.log("ok");
  }
}
export default addFarmPostData;
