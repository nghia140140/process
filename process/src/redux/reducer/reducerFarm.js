import { FETCH_FARM, GET_FARM } from "../types/Farm/types";
const defaultState = [
  {
    id: 502,
    name: "Farm name 2",
    code: "1607238151560",
    email: "dalatfarm@gmail.com",
    phone: "097777777",
    status: "CREATING",
    farmingSeasonNumber: 5,
    accountId: 152,
  },
  {
    id: 504,
    name: "Farm name ads adasd 1",
    code: "1607238151560",
    email: "dalatfarm@gmail.com",
    phone: "09888888",
    status: "SUCESS",
    farmingSeasonNumber: 5,
    accountId: 152,
  },
];

const dataFarm = (state = defaultState, action) => {
  if (action.type === FETCH_FARM) return action.data;
  if (action.type === GET_FARM) return state;
  return state;
};
export default dataFarm;
