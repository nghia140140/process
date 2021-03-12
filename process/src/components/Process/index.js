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
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import fetchDataCultivation from "../../redux/action/Farm/fetchDataCultivation";
import Process from "./Process";
import { connect } from "react-redux";
var { height, width } = Dimensions.get("window");

class ListProcess extends Component {
  navigationHome = () => {
    this.props.navigation.navigate("dashboard");
  };
  navigationAddProcess = () => {
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIzMDMiLCJzdWIiOiJrYWl6OTciLCJpYXQiOjE2MDc3NTQwNzgsImV4cCI6MTYwNzg1NDA3OH0.AdmsKjw3OqHSanijH8uM6H9uRG33122G5iHFqhZJeaWImCi2tseO3VDzTKzSjIwsOC1DTK8S4z06I79So_vDvg"
    // const token = localStorage.token;
    console.log(token);
    this.props.fetchDataCultivation(token);
    // .then((res) => console.log(res))
    // .catch((err) => console.log(err));
    this.props.navigation.navigate("addprocess");
  };
  render() {
    const { seasonProcesses } = this.props.seasonProcesses;
    return (
      <View style={{ marginTop: 25 }}>
        <View
          style={{
            height: 50,
            backgroundColor: "#333",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#333",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <TouchableOpacity onPress={this.props.navigation.goBack}>
              <Text style={{ color: "#fff" }}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigationHome}>
              <Text style={{ color: "#fff" }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigationAddProcess}>
              <Text style={{ color: "#fff" }}>Tạo quy trình</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,
              color: "#f00",
              justifyContent: "center",
            }}
          >
            Quy trình
          </Text>
        </View>
        {seasonProcesses.length == 0 ? (
          <View
            style={{ justifyContent: "center", marginTop: 50, padding: 20 }}
          >
            <Text style={{ fontSize: 30, color: "#f00" }}>
              Hiện tại chưa có quy trình nào, vui lòng tạo mới
            </Text>
          </View>
        ) : (
          <View>
            <FlatList
              data={seasonProcesses}
              renderItem={({ item }) => <Process myFarm={item} />}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    seasonProcesses: state.seasonProcesses,
  };
}
export default connect(mapStateToProps, { fetchDataCultivation })(ListProcess);
