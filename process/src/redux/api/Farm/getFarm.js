import { GET_FARM } from "../../../configs/Domain/index";
function getFarm(id) {
  return fetch(URL.GET_FARM + id)
    .then((res) => res.json())
    .then((resJSON) => resJSON);
}

export default getFarm;
