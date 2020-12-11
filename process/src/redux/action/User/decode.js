export function decode(data) {
  console.log("dispatch: ");
  console.log(data);
  return {
    type: "DECODE",
    data,
  };
}
