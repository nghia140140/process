import React, { Component } from "react";
import { Text, View, Dimensions, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
var { height, width } = Dimensions.get("window");
export default class Header extends Component {
  render() {
    const handle = () => {
      this.props.navMenu();
    };
    return (
      <View
        style={{
          marginTop: 25,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 40,
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity style={{ marginLeft: 15 }} onPress={handle}>
          <Icon name="bars" size={18} color={"#000"} />
          {/* <Text>icon menu</Text> */}
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>icon menu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
