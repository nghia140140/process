import * as URL from "../../../configs/Domain/index";
function fetchDataCulti(data) {
  console.log("dispatch: ");
  console.log(data);
  return {
    type: "FETCH_CULTIVATION",
    data,
  };
}
function fetchDataCultivation(token) {
  return (dispatch) => {
    if (token) {
      return fetch(URL.FETCH_CULTIVATION, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          dispatch(fetchDataCulti(data.data.content));
        });
    }
  };
}
export default fetchDataCultivation;
