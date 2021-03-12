import { FETCH_FARM } from '../../types/Farm/types';
import getFarm from '../../api/Farm/getFarm';
export function actionGetFarm(data) {
  return {
    type: FETCH_FARM,
    data,
  };
}
export function fetchDataFarm(id){
    return (dispatch) =>{
        getFarm(id)
            .then((data) => dispatch(actionGetFarm(data))
            .catch((err) => console.log(err);)
    }
}