import * as URL from "../../../configs/Domain/index";

function handleLogin(data) {
  return fetch(URL.FETCH_FARM, {
    method: "POST",
    headers: {
      // 'Authorization': 'Bearer ' + DEMO_TOKEN
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((resJSON) => resJSON);
}
export default handleLogin;
