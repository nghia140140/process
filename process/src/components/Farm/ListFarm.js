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
  abc() {
    const dataFarm = this.props;
    console.log("datafarm: ");
    // console.log(dataFarm.dataFarm);
    const data = dataFarm.dataFarm;
    console.log(data);
    return data;
  }
  render() {
    
    const dataFarm = this.props;
    const data = dataFarm.dataFarm;
    return (
      <View>
        <FlatList
          data={data}
          // numColumns={2}
          renderItem={({ item }) => <Farm myFarm={item} />}
          // keyExtractor={(item) => item.id}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* <FlatList
            data={this.getWordList()}
            renderItem={({item}) => <Word myWord={item} />}
            keyExtractor={(item) => item.id}
          /> */}
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
