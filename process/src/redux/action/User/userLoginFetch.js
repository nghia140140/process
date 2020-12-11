import * as URL from "../../../configs/Domain/index";

export const userLoginFetch = (user) => {
  return (dispatch) => {
    return fetch(URL.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // if (data.message) {
        //   console.log("err");
        // } else {
        console.log(data);
        console.log(data.token);
        localStorage.setItem("token", data.token);
        //   dispatch(loginUser(data.user))
        // }
      });
  };
};
