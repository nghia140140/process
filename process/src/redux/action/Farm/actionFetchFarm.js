import { FETCH_FARMSEASON } from "../../types/Farm/types";
// import * as TYPE from "../../types/Farm/types";
export function actionFetchFarm(data) {
  return {
    type: "FETCH_FARM",
    data,
  };
}
