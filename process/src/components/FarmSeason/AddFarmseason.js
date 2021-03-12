import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
var { height, width } = Dimensions.get("window");
import { styles } from "./stylesAddFarmseason";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome5";
import DateTimePicker from "@react-native-community/datetimepicker";

import { addFarmseason } from "../../redux/action/Farm/addFarmseason";

class AddFarmseason extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      sowingDate: new Date(),
      harvestDate: new Date(),
      dataSowingDate: "",
      dataHarvestDate: "",
      seed: "",
      date: new Date(),
      showSowingDate: false,
      showHarvestDate: false,
    };
  }
  handleAddFarmseason = () => {
    const sowingDateTime =
      this.state.sowingDate.getFullYear() +
      "-" +
      (this.state.sowingDate.getMonth() + 1) +
      "-" +
      this.state.sowingDate.getDate();
    const harvestDateTime =
      this.state.harvestDate.getFullYear() +
      "-" +
      (this.state.harvestDate.getMonth() + 1) +
      "-" +
      this.state.harvestDate.getDate();
    // console.log(sowingDateTime);
    let dataFarmseason = {
      name: this.state.name,
      description: this.state.description,
      sowingDate: this.state.sowingDate,
      harvestDate: this.state.harvestDate,
      // sowingDate: sowingDateTime,
      // harvestDate: harvestDateTime,
      seed: this.state.seed,
      totalCrop: 4,
      // status: "",
      cultivationHistories: [],
      farmId: this.props.idFarm,
      seasonProcesses: [],
    };
    this.props.addFarmseason(dataFarmseason);
    this.props.navigation.navigate("addprocess");
    // api post farmseason
    // console.log(this.state.harvestDate);
    // console.log(this.state.sowingDate);
  };
  navigationHome = () => {
    this.props.navigation.navigate("dashboard");
  };

  showDateSowing = () => {
    this.setState({ showSowingDate: true });
  };
  showDateHarvest = () => {
    this.setState({ showHarvestDate: true });
  };

  onChangeSowingDate = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    const sowingDateTime =
      currentDate.getDate() +
      "-" +
      (currentDate.getMonth() + 1) +
      "-" +
      currentDate.getFullYear();
    console.log(sowingDateTime);
    this.setState({
      showSowingDate: Platform.OS === "ios",
      sowingDate: currentDate,
      dataSowingDate: sowingDateTime,
    });
  };
  onChangeHarvestDate = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    const harvestDateTime =
      currentDate.getDate() +
      "-" +
      (currentDate.getMonth() + 1) +
      "-" +
      currentDate.getFullYear();
    console.log(harvestDateTime);
    this.setState({
      showHarvestDate: Platform.OS === "ios",
      harvestDate: currentDate,
      dataHarvestDate: harvestDateTime,
    });
  };
  render() {
    const logdata = () => {
      console.log(this.state.harvestDate);
    };
    return (
      <View style={{ marginTop: 25, flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#333",
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <TouchableOpacity onPress={this.props.navigation.goBack}>
            <Text style={{ color: "#fff" }}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.navigationHome}>
            <Text style={{ color: "#fff" }}>Home</Text>
          </TouchableOpacity>
          <Text></Text>
        </View>
        <View
          style={{
            flex: 40,
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <View style={{ flex: 35 }}>
            <View
              style={{
                marginTop: 20,
                justifyContent: "center",
                flexDirection: "row",
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 30, color: "#f00", fontWeight: "bold" }}>
                Thêm mùa vụ
              </Text>
            </View>
            <View style={styles.inputcomponent}>
              <TextInput
                style={styles.input}
                TextContentType="emaiAddress"
                keyboardType="email-address"
                placeholder="Nhập tên mùa vụ"
                onChangeText={(text) => this.setState({ name: text })}
              ></TextInput>
            </View>
            <View style={styles.inputcomponent}>
              <TextInput
                style={styles.input}
                TextContentType="emaiAddress"
                keyboardType="email-address"
                placeholder="Mô tả"
                onChangeText={(text) => this.setState({ description: text })}
              ></TextInput>
            </View>
            <View style={styles.date}>
              <TextInput
                style={styles.input}
                TextContentType="emaiAddress"
                keyboardType="email-address"
                placeholder="Ngày gieo"
                value={this.state.dataSowingDate}
                // onChangeText={(text) => this.setState({ sowingDate: text })}
              ></TextInput>
              <TouchableOpacity
                onPress={this.showDateSowing}
                style={{ positon: "absolute", right: 40, top: 10 }}
              >
                <Icon name={"calendar-alt"} size={20} color={"black"} />
              </TouchableOpacity>
            </View>
            <View style={styles.date}>
              <TextInput
                style={styles.input}
                TextContentType="emaiAddress"
                keyboardType="email-address"
                placeholder="Ngày thu hoạch"
                value={this.state.dataHarvestDate}
                // onChangeText={(text) => this.setState({ harvestDate: text })}
              ></TextInput>
              <TouchableOpacity
                onPress={this.showDateHarvest}
                style={{ positon: "absolute", right: 40, top: 10 }}
              >
                <Icon name={"calendar-alt"} size={20} color={"black"} />
              </TouchableOpacity>
            </View>
            {this.state.showSowingDate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={this.state.date}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={this.onChangeSowingDate}
              />
            )}
            {this.state.showHarvestDate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={this.state.date}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={this.onChangeHarvestDate}
              />
            )}
            <View style={styles.inputcomponent}>
              <TextInput
                style={styles.input}
                TextContentType="emaiAddress"
                keyboardType="email-address"
                placeholder="Giống"
                onChangeText={(text) => this.setState({ seed: text })}
              ></TextInput>
            </View>
          </View>
          <View style={{ flex: 5 }}>
            <TouchableOpacity
              onPress={this.handleAddFarmseason}
              style={{
                height: 45,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00770f",
                marginLeft: 30,
                marginRight: 30,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>Thêm mùa vụ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    idFarm: state.idFarm,
  };
}
export default connect(mapStateToProps, { addFarmseason })(AddFarmseason);
