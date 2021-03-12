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

import { actiongetProcess } from "../../redux/action/Farm/actionProcess";
var { height, width } = Dimensions.get("window");

class Farmseason extends Component {
  // navigationFarmseson = () => {
  //   this.props.navFarmseason();
  // };
  constructor(props) {
    super(props);
    this.state = {
      sowingDate: this.props.myFarm.sowingDate,
      harvestDate: this.props.myFarm.harvestDate,
    };
  }

  fet = () => {
    const { seasonProcesses } = this.props.myFarm;
    this.props.actiongetProcess(seasonProcesses);
  };
  navigationProcess = () => {
    console.log("navigation process");
    this.fet();
    // const { seasonProcesses } = this.props.myFarm;
    // console.log(seasonProcesses);
    // this.props.actiongetProcess(seasonProcesses);
    this.props.navProcess();
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
    const sowing = new Date(sowingDate);
    const sowingDateString =
      sowing.getDate() +
      "-" +
      (sowing.getMonth() + 1) +
      "-" +
      sowing.getFullYear();
    const harvest = new Date(harvestDate);
    const harvestDateString =
      harvest.getDate() +
      "-" +
      (harvest.getMonth() + 1) +
      "-" +
      harvest.getFullYear();
    return (
      <View>
        <TouchableOpacity onPress={this.navigationProcess}>
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
                <Text>{sowingDateString}</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>Ngày thu hoạch:</Text>
              <View style={styles.data}>
                <Text>{harvestDateString}</Text>
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.label}>Giống cây:</Text>
              <View style={styles.data}>
                <Text>{seed}</Text>
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
export default connect(null, { actiongetProcess })(Farmseason);
