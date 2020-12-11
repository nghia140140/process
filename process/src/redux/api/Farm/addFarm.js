import * as URL from "../../../configs/Domain/index";

function addFarm(data) {
  return fetch(URL.FETCH_FARM, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((resJSON) => resJSON);
}
export default addFarm;