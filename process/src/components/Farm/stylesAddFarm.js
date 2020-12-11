import React from "react";

import { StyleSheet, Dimensions } from "react-native";

var { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  inputcomponent: {
    marginTop: 30,
    flexDirection: "row",
    marginLeft: 10,
  },
  input: {
    paddingLeft: 10,
    width: width - 20,
    height: 45,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 3,
    marginRight: 15,
  },
});
export { styles };
