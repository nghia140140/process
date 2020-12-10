import { FETCH_FARM, GET_FARM } from "../types/Farm/types";
const defaultState = [
  {
    id: 752,
    name: "Farm name 1",
    code: "1607337682369",
    email: "dalatfarm@gmail.com",
    phone: "097777777",
    status: "CREATING",
    farmingSeasonNumber: null,
    accountId: 702,
    farmingSeasons: [
      {
        id: 802,
        name: "Farm Season Winter 1",
        description: "Winter 2020 Season 1 of 3",
        sowingDate: "2020-11-17T00:00:00Z",
        harvestDate: "2021-05-17T00:00:00Z",
        seed: "Cây Xoài",
        totalCrop: 4,
        status: "ACTIVATED",
        cultivationHistories: [],
        farmId: 752,
        seasonProcesses: [
          {
            id: 852,
            name: "Season Process 1",
            note: "Note Season Process",
            description: "Description Season Process",
            stepsNumber: 3,
            interval: 3,
            status: "WAITING",
            startDate: "2020-12-17T00:00:00Z",
            endDate: "2021-02-17T00:00:00Z",
            ratings: "EXCELLENT",
            cultivationProcessId: null,
            farmingSeasonId: 802,
            seasonProcessSteps: [],
          },
        ],
      },
    ],
  },
  {
    id: 903,
    name: "Farm name 3",
    code: "1607491156108",
    email: "dalatfarm@gmail.com",
    phone: "097777777",
    status: "CREATING",
    farmingSeasonNumber: null,
    accountId: 702,
    farmingSeasons: [],
  },
  {
    id: 902,
    name: "Farm name 2",
    code: "1607491156107",
    email: "dalatfarm@gmail.com",
    phone: "097777777",
    status: "CREATING",
    farmingSeasonNumber: null,
    accountId: 702,
    farmingSeasons: [],
  },
];

const dataFarm = (state = defaultState, action) => {
  if (action.type === FETCH_FARM) return action.data;
  if (action.type === GET_FARM) return state;
  return state;
};
export default dataFarm;
