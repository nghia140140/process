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
    // this.props.navigation.navigator("menu");
    this.props.navigation.navigate("menu");
  };
  render() {
    return (
      <View>
        <Header navMenu={this.navigationMenu} />
        <ListFarm />
      </View>
    );
  }
}
export default connect()(Dashboard);
