import * as URL from "../../../configs/Domain/index";
function getProfile(data) {
  console.log("dispatch profile: ");
  console.log(data);
  return {
    type: "FETCH_PROFILE",
    data,
  };
}
export const fetchProfile = (token, id) => {
  return (dispatch) => {
    if (token) {
      return fetch(URL.GET_PROFILE + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data.data);
          dispatch(getProfile(data.data));
        });
    }
  };
};
