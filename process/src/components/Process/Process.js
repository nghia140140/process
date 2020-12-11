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

import { styles } from "./styleFarmSeason";
import { connect } from "react-redux";
var { height, width } = Dimensions.get("window");

class Process extends Component {
  // navigationFarmseson = () => {
  //   this.props.navFarmseason();
  // };
  constructor(props) {
    super(props);
    this.state = {
      // sowingDate: this.props.myFarm.sowingDate,
      // harvestDate: this.props.myFarm.harvestDate,
    };
  }
  render() {
    const {
      id,
      name,
      note,
      description,
      stepsNumber,
      interval,
      status,
      startDate,
      endDate,
      ratings,
      seasonProcessSteps,
    } = this.props.myFarm;
    const { seasonProcesses } = this.props;
    return (
      <View>
        <TouchableOpacity>
          <View style={{ height: 5 }}></View>
          <View style={{ backgroundColor: "#fff", borderRadius: 20 }}>
            <View style={styles.item}>
              <View style={{ justifyContent: "center" }}>
                <Text style={styles.label}>Tên mùa vụ:</Text>
              </View>
              <View style={styles.data}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>{name}</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>Mô tả:</Text>
              <View style={styles.data}>
                <Text>{description}</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>Ngày Gieo hạt:</Text>
              <View style={styles.data}>
                <Text>{this.state.startDate}</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>Ngày thu hoạch:</Text>
              <View style={styles.data}>
                <Text>{endDate}</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>Giống cây:</Text>
              <View style={styles.data}>
                <Text>{ratings}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     dataFarmseason: state.dataFarmseason,
//   };
// }
export default connect()(Process);
