import * as URL from "../../../configs/Domain/index";

function fetchDataCultivation(token) {
  fetch(URL.DOMAIN + "/api/farms/details/303", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log("success");
      console.log(data);
      //   if (data.message) {
      //     localStorage.removeItem("token")
      //   } else {
      //     dispatch(loginUser(data.user))
      //   }
    });
}
export default fetchDataCultivation;