import { FETCH_PROCESS } from "../../types/Farm/types";
export function actiongetProcess(data) {
  console.log("data dispatch: ");
  console.log(data);
  return {
    type:  "FETCH_PROCESS" ,
    data,
  };
}
