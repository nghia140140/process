import * as URL from "../../../configs/Domain/index";

export const getProfileFetch = () => {
    // /api/accounts/details/604
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch(URL.DOMAIN + "/api/accounts/details/604", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
            console.log("success");
            console.log(data);
        //   if (data.message) {
        //     localStorage.removeItem("token")
        //   } else {
        //     dispatch(loginUser(data.user))
        //   }
        })
    }
  }
}