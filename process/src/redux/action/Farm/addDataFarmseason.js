import * as URL from "../../../configs/Domain/index";
export const addDataFarmseason = (data) => {
  const token = localStorage.token;
  if (token) {
    return fetch(URL.ADD_FARMSEASON, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((resJSON) => resJSON);
  }
};
export default addDataFarmseason;
