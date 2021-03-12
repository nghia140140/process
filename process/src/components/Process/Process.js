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
      showStep: false,
      // process: {
      //   id: 852,
      //   name: "Season Process 1",
      //   note: "Note Season Process",
      //   description: "Description Season Process",
      //   stepsNumber: 3,
      //   interval: 3,
      //   status: "WAITING",
      //   startDate: "2020-12-17T00:00:00Z",
      //   endDate: "2021-02-17T00:00:00Z",
      //   ratings: "EXCELLENT",
      //   cultivationProcessId: null,
      //   farmingSeasonId: 802,
      seasonProcessSteps: [
        {
          name: "Season Process Step 1",
          description: "Description Season Process Step",
          startDate: "2020-12-19T00:00:00.000Z",
          endDate: "2021-01-01T00:00:00.000Z",
          interval: 3,
          afterDays: 3,
          startHour: 3,
          status: "ACTIVATED",
          note: "Note Season Process Step",
        },
        {
          name: "Season Process Step 2",
          description: "Description Season Process Step",
          startDate: "2020-12-19T00:00:00.000Z",
          endDate: "2021-01-01T00:00:00.000Z",
          interval: 3,
          afterDays: 3,
          startHour: 3,
          status: "ACTIVATED",
          note: "Note Season Process Step",
        },
      ],
      // },
      // sowingDate: this.props.myFarm.sowingDate,
      // harvestDate: this.props.myFarm.harvestDate,
    };
  }
  showStep = (data) => {
    this.setState({
      showStep: !this.state.showStep,
    });
    console.log("HELLO");
  };
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
    // const {
    //   id,
    //   name,
    //   note,
    //   description,
    //   stepsNumber,
    //   interval,
    //   status,
    //   startDate,
    //   endDate,
    //   ratings,
    //   seasonProcessSteps,
    // } = this.state.process;
    const { seasonProcesses } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={this.showStep}>
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
        {this.state.showStep && (
          <View>
            {this.state.seasonProcessSteps.map((e) => {
              return (
                <View style={{ marginTop: 10, marginLeft: 30 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold" }}>Bước: </Text>
                    <Text>{e.name}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold" }}>Ngày bắt đầu: </Text>
                    <Text>{e.startDate}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold" }}>Tình trạng: </Text>
                    <Text>{e.status}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        )}
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
