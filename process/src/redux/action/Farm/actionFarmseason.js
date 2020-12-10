import { FETCH_FARMSEASON } from "../../types/Farm/types";
export function actiongetFarmseason(data) {
  console.log("data dispatch: ");
  console.log(data);
  return {
    type: {FETCH_FARMSEASON},
    data,
  };
}