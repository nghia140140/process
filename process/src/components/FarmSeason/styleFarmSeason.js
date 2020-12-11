import React from "react";

import { StyleSheet, Dimensions } from "react-native";

var { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  label: {
    // fontWeight: "bold",s
    fontSize: 15,
  },
  item: {
    flexDirection: "row",
    marginLeft: 20,
  },
  data: {
    justifyContent: "center",
    marginLeft: 20,
    flexDirection: "column",
  },
});
export { styles };
