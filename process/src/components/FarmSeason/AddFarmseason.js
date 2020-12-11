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

export default class AddFarmseason extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      sowingDate: "",
      harvestDate: "",
      seed: "",
    };
  }
  handleAddFarmseason = () => {
    let dataFarmseason = {
      name: this.state.name,
      description: this.state.description,
      sowingDate: this.state.sowingDate,
      harvestDate: this.state.harvestDate,
      seed: this.state.seed,
    }
    // api post farmseason
  };
  navigationHome = () => {
    this.props.navigation.navigate("dashboard");
  };
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
            <View style={styles.inputcomponent}>
              <TextInput
                style={styles.input}
                TextContentType="emaiAddress"
                keyboardType="email-address"
                placeholder="Ngày gieo"
                onChangeText={(text) => this.setState({ sowingDate: text })}
              ></TextInput>
            </View>
            <View style={styles.inputcomponent}>
              <TextInput
                style={styles.input}
                TextContentType="emaiAddress"
                keyboardType="email-address"
                placeholder="Ngày thu hoạch"
                onChangeText={(text) => this.setState({ harvestDate: text })}
              ></TextInput>
            </View>
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
