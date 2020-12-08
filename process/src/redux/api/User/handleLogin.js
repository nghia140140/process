import * as URL from "../../../configs/Domain/index";

function handleLogin(data) {
  return fetch(URL.LOGIN, {
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
export default handleLogin;
