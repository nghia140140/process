import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Picker,
} from "react-native";
import { connect } from "react-redux";
import RNPickerSelect from "@react-native-picker/picker";

var { height, width } = Dimensions.get("window");
import { styles } from "./stylesAddProcess";

class AddProcess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      address: "",
      value: "",
    };
  }
  handleAddFarm = () => {
    alert("asfdas");
    console.log("ads");
  };
  // piker() {
  //   console.log("abc");
  //   const { dataCultivation } = this.props;
  //   console.log(dataCultivation);
  //   // return {};
  // }

  navigationHome = () => {
    this.props.navigation.navigate("dashboard");
  };
  updateUser = (value) => {
    this.setState({ value: value });
  };
  render() {
    const { dataCultivation } = this.props;
    const piker = () => {
      // console.log(dataCultivation);
      console.log(this.state.value);
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
                Tạo quy trình
              </Text>
            </View>
            <Picker
              selectedValue={this.state.value}
              style={{ height: 50, width: width }}
              onValueChange={this.updateUser}
            >
              {dataCultivation.map((e) => {
                return (
                  <Picker.Item label={e.name} value={e.id} />
                );
              })}
            </Picker>
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
              onPress={piker}
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
            <Text></Text>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    dataCultivation: state.dataCultivation,
  };
}
export default connect(mapStateToProps)(AddProcess);
