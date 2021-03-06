import { FETCH_FARMSEASON } from "../../types/Farm/types";
import * as URL from "../../../configs/Domain/index";
function loadData(data) {
  return {
    type: "FETCH_FARM",
    data,
  };
}
export const fetchDataFarm = (token) => {
  return (dispatch) => {
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
          dispatch(loadData(data.data.content));
        });
    } else {
      console.log("loi server");
    }
  };
};
