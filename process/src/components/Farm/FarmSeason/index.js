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

import Farmseason from "./FarmSeason";

// import Header from "../../Header/index";

import { connect } from "react-redux";
var { height, width } = Dimensions.get("window");

// navigationFarmseson = () => {
//   this.props.navFarmseason();
// };\
// class ListFarmseason extends Component {

// const { farmingSeasons } = this.props;
class ListFarmseason extends Component {
  // function ListFarmseason({ route, navigation }) {
  log = () => {
    const { dataFarmseason } = this.props;

    // const { dataFarmseason } = this.props.dataFarmseason;
    const data = dataFarmseason.dataFarmseason;
    console.log(data);
    console.log(dataFarmseason);
  };

  render() {
    //   const { farmingSeasons } = route.params;
    const { dataFarmseason } = this.props.dataFarmseason;
    return (
      <View style={{ marginTop: 25 }}>
        <View style={{ height: 50, backgroundColor: "#000" }}></View>
        <Text
          style={{
            fontSize: 20,
            color: "#f00",
            justifyContent: "center",
          }}
        >
          Mùa Vụ
        </Text>
        <FlatList
          data={dataFarmseason}
          renderItem={({ item }) => <Farmseason myFarm={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity onPress={this.log}>
          <Text>data</Text>
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
export default connect(mapStateToProps)(ListFarmseason);
