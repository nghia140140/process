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

import Header from "../Header/index";
import Farm from "./Farm";

import { connect } from "react-redux";
var { height, width } = Dimensions.get("window");

class ListFarm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  navigationFarmseason = (data) => {
    this.props.navFarmseason(data);
  };
  render() {
    const dataFarm = this.props;
    const data = dataFarm.dataFarm;
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Farm myFarm={item} navFarmseason={this.navigationFarmseason} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    dataFarm: state.dataFarm,
  };
}
export default connect(mapStateToProps)(ListFarm);
