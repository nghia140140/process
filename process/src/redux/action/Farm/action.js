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
// {
//     "code": "SUCCESS",
//     "message": "Successful",
//     "message_dev": "",
//     "data": {
//         "content": [
//             {
//                 "id": 502,
//                 "name": "Farm name 1",
//                 "code": "1607238151560",
//                 "email": "dalatfarm@gmail.com",
//                 "phone": "097777777",
//                 "status": "CREATING",
//                 "farmingSeasonNumber": 5,
//                 "accountId": 152,
//             }
//         ],
//         "pageable": {
//             "sort": {
//                 "unsorted": true,
//                 "sorted": false,
//                 "empty": true
//             },
//             "offset": 0,
//             "pageSize": 20,
//             "pageNumber": 0,
//             "unpaged": false,
//             "paged": true
//         },
//         "last": true,
//         "totalElements": 1,
//         "totalPages": 1,
//         "size": 20,
//         "number": 0,
//         "sort": {
//             "unsorted": true,
//             "sorted": false,
//             "empty": true
//         },
//         "first": true,
//         "numberOfElements": 1,
//         "empty": false
//     }
// }
