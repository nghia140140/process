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
import Icon from "react-native-vector-icons/FontAwesome5";

import Header from "../Header/index";
import ListFarm from "../Farm/ListFarm";

import { connect } from "react-redux";

var { height, width } = Dimensions.get("window");

class Dashboard extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  navigationMenu = () => {
    this.props.navigation.navigate("menu");
  };
  navigationFarmseason = (data) => {
    this.props.navigation.navigate("farmSeason");
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Header navMenu={this.navigationMenu} nav={navigation} />
        <ListFarm navFarmseason={this.navigationFarmseason} />
      </View>
    );
  }
}
export default connect()(Dashboard);
