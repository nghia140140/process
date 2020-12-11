import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
var { height, width } = Dimensions.get("window");
import { styles } from "./stylesAddProcess";

export default class AddProcess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      address: "",
    };
  }
  handleAddFarm = () => {
    alert("asfdas");
    console.log("ads");
  };

  navigationHome = () => {
    this.props.navigation.navigate("dashboard");
  };
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
  //   seasonProcessSteps: [],
  render() {
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
                Tạo quy trình
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
                placeholder="Ghi chú"
                onChangeText={(text) => this.setState({ phone: text })}
              ></TextInput>
            </View>
            <View style={styles.inputcomponent}>
              <TextInput
                style={styles.input}
                TextContentType="emaiAddress"
                keyboardType="email-address"
                placeholder="Mô tả"
                onChangeText={(text) => this.setState({ address: text })}
              ></TextInput>
            </View>
            <View style={styles.inputcomponent}>
              <TextInput
                style={styles.input}
                TextContentType="emaiAddress"
                keyboardType="email-address"
                placeholder="Ngày bắt đầu"
                onChangeText={(text) => this.setState({ address: text })}
              ></TextInput>
            </View>
            <View style={styles.inputcomponent}>
              <TextInput
                style={styles.input}
                TextContentType="emaiAddress"
                keyboardType="email-address"
                placeholder="Ngày hoàn thành"
                onChangeText={(text) => this.setState({ address: text })}
              ></TextInput>
            </View>
          </View>
          <View style={{ flex: 5 }}>
            <TouchableOpacity
              onPress={this.handleAddFarm}
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
              <Text style={{ fontSize: 20, color: "#fff" }}>Tạo quy trình</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
