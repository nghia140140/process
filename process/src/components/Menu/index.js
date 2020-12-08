import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Switch,
  Animated,
  Keyboard,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { AsyncStorage } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

var { height, width } = Dimensions.get("window");

const iconTimes = <Icon name="times" size={20} color={"#fff"} />;
const iconUser = <Icon name="user" size={18} color={"#fff"} />;
const line = (
  <View
    style={{ width: width - 40, height: 1, backgroundColor: "gray" }}
  ></View>
);
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false,
      _id: "",
      status: 0,
    };
  }
//   componentDidMount() {
//   }
  render() {
    return (
      <View style={{ flex: 1, padding: 20, backgroundColor: "#000" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: height / 15,
            backgroundColor: "#000",
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            {iconTimes}
          </TouchableOpacity>
          <Text style={{ color: "red" }}></Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("profile")}
          >
            {iconUser}
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 30 }}>
          <TouchableOpacity>
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                Quản lý Nông trại
              </Text>
            </View>
            <View style={{}}>{line}</View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                History
              </Text>
            </View>
            <View style={{}}>{line}</View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                Schedule
              </Text>
            </View>
            <View style={{}}>{line}</View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                Chat with us
              </Text>
            </View>
            <View style={{}}>{line}</View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                Settings
              </Text>
            </View>
            <View style={{}}>{line}</View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                Tutorial
              </Text>
            </View>
            <View style={{}}>{line}</View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                Support
              </Text>
            </View>
            <View style={{}}>{line}</View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
