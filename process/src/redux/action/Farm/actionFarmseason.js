import { FETCH_FARMSEASON } from "../../types/Farm/types";
// import * as TYPE from "../../types/Farm/types";
export function actiongetFarmseason(data) {
  return {
    type: "FETCH_FARMSEASON",
    data,
  };
}
