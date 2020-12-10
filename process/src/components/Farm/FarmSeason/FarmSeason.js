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

import { connect } from "react-redux";
var { height, width } = Dimensions.get("window");

class Farmseason extends Component {
  // navigationFarmseson = () => {
  //   this.props.navFarmseason();
  // };
  log = () => {
    const { dataFarmseason } = this.props;
    console.log(dataFarmseason);
  };
  render() {
    const {
      id,
      name,
      description,
      sowingDate,
      harvestDate,
      seed,
      totalCrop,
      status,
      seasonProcesses,
    } = this.props.myFarm;
    const { dataFarmseason } = this.props;
    // id: 802,
    // name: "Farm Season Winter 1",
    // description: "Winter 2020 Season 1 of 3",
    // sowingDate: "2020-11-17T00:00:00Z",
    // harvestDate: "2021-05-17T00:00:00Z",
    // seed: "Cây Xoài",
    // totalCrop: 4,
    // status: "ACTIVATED",
    return (
      <View>
        <TouchableOpacity>
          <View style={{ height: 5 }}></View>
          <Text>Tên màu vụ: {name}</Text>
          <Text>Mô tả: {description}</Text>
          <Text>Ngày bắt đầu: {sowingDate}</Text>
          <Text>Ngày kết thúc: {harvestDate}</Text>
          <Text>Giống cây: {seed}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.log}>
          <Text>loadding</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    dataFarmseason: state.dataFarmseason,
  };
}
export default connect()(Farmseason);
