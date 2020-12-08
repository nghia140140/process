import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";
const IS_ANDROID = Platform.OS == "android";
const IS_IOS = Platform.OS == "ios";

var { height, width } = Dimensions.get("window");

export default class Header2 extends Component {
  render() {
    return (
      <View>
        {IS_ANDROID ? (
          <View
            style={{ height: 18, width: width, backgroundColor: "black" }}
          ></View>
        ) : (
          <View style={{ height: 18, width: width }}></View>
        )}
      </View>
    );
  }
}
