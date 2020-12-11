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
  navigationFarmseason = () => {
    this.props.navFarmseason();
  };
  render() {
    const { dataFarm } = this.props;
    // const data = dataFarm.dataFarm;
    const log = () => {
      console.log(dataFarm);
    };
    return (
      <View>
        {dataFarm.length == 0 ? (
          <View
            style={{ justifyContent: "center", marginTop: 50, padding: 20 }}
          >
            <Text style={{ fontSize: 30, color: "#f00" }}>
              Hiện tại chưa có mùa vụ nào, vui lòng tạo mới
            </Text>
          </View>
        ) : (
          <View>
            <FlatList
              data={dataFarm}
              renderItem={({ item }) => (
                <Farm myFarm={item} navFarmseason={this.navigationFarmseason} />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
        <TouchableOpacity onPress={log}>
          <Text>logdata</Text>
        </TouchableOpacity>
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
