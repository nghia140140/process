import * as URL from "../../../configs/Domain/index";
export const fetchDataFarm = (token) => {
  return (dispatch) => {
    // const token = localStorage.token;
    if (token) {
      return fetch(URL.GET_FARM, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          dispatch(loadData(data));
          // if (data.message) {
          //   localStorage.removeItem("token");
          // } else {
          // }
        });
    }
  };
};
function loadData(data) {
  return {
    type: "FETCH_FARM",
    data,
  };
}
// function fetchDataFarm(token) {
//   fetch(URL.GET_FARM, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log("success");
//       console.log(data);
//       //   if (data.message) {
//       //     localStorage.removeItem("token")
//       //   } else {
//       //     dispatch(loginUser(data.user))
//       //   }
//     });
// }
export default fetchDataFarm;
