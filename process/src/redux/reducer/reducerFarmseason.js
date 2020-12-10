import { FETCH_FARMSEASON, GET_FARMSEASON } from "../types/Farm/types";

const defaultState = {
  dataFarmseason: [
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
};
const dataFarmseason = (state = defaultState, action) => {
  if (action.type === {FETCH_FARMSEASON}) {
    return { dataFarmseason: action.data };
  }
  if (action.type === {GET_FARMSEASON}) return state;
  return state;
};
export default dataFarmseason;
