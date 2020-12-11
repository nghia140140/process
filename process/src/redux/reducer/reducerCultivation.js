const defaultState = [
  {
    id: 651,
    name: "Xử lý môi trường",
    description: "Xử lý môi trường",
    status: "ACTIVATED",
    note: "string",
    startDate: null,
    ratings: "EXCELLENT",
    stepsNumber: 1,
    appliedNumber: 0,
    interval: 0,
    cultivationSteps: [
      {
        id: 703,
        name: "Bón làm tơi đất",
        startDate: 1597795200.0,
        interval: null,
        afterDays: null,
        startHour: null,
        endDate: null,
        description: "Cung cấp các chất dinh dưỡng cho đất nền",
        status: "ACTIVATED",
        note: "note",
        type: null,
        nextStepId: null,
        cultivationProcessId: 652,
      },
      {
        id: 704,
        name: "Bón phân nền",
        startDate: 1597622400.0,
        interval: null,
        afterDays: null,
        startHour: null,
        endDate: null,
        description: "Cung cấp các chất dinh dưỡng cho đất nền",
        status: "ACTIVATED",
        note: "note",
        type: null,
        nextStepId: 703,
        cultivationProcessId: 652,
      },
    ],
  },
  {
    id: 652,
    name: "Xử lý môi trường 2",
    description: "Xử lý môi trường 2",
    status: "ACTIVATED",
    note: "string 2",
    startDate: null,
    ratings: "EXCELLENT 2",
    stepsNumber: 1,
    appliedNumber: 0,
    interval: 0,
  },
];

const dataCultivation = (state = defaultState, action) => {
  if (action.type === "FETCH_CULVIVATION") return action.data;
  return state;
};
export default dataCultivation;
