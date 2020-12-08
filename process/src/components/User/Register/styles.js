import React from "react";

import { StyleSheet, Dimensions } from "react-native";

var { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "white",
  },
  header: {
    fontSize: 25,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
  },
  banner: {
    width: width,
    alignItems: "center",
  },
  image: {
    height: 100,
    width: width,
    margin: 5,
  },
  up: {
    paddingTop: 50,
    flex: 1,
  },
  down: {
    flex: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    justifyContent: "center",
  },
  input: {
    paddingLeft: 10,
    width: width - 40,
    height: 40,
    backgroundColor: "#ededeb",
    marginBottom: 10,
    borderRadius: 2,
  },
  titleLogin: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 2,
    marginBottom: 5,
  },
  login: {
    fontSize: 18,
    color: "#fff",
  },
  btnLogin: {
    fontWeight: "bold",
    width: 280,
    height: 45,
    backgroundColor: "#1094b5",
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  facebook: {
    width: 280,
    height: 45,
    justifyContent: "center",
    borderRadius: 10,
  },
  btnFB: {
    color: "#fff",
  },
  line: {
    flex: 2,
    height: 1,
    backgroundColor: "#000",
  },
  textOr: {
    textAlign: "center",
    flex: 1,
  },
  devider: {
    width: 280,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textError: {
    marginLeft: 10,
    color: "red",
    fontStyle: "italic",
  },
  password: {
    flexDirection: "row",
    position: "relative",
    left: 10,
  },
  footer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});
export { styles };
