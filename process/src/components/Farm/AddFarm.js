import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
var { height, width } = Dimensions.get("window");
import { styles } from "./stylesAddFarm";
import addFarmPostData from "../../redux/api/Farm/addFarmPostData";
import { addFarm } from "../../redux/action/Farm/actionAddFarm";
import { fetchDataFarm } from "../../redux/action/Farm/actionFetchFarm";
import { connect } from "react-redux";

class AddFarm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      email: "",
      phone: "",
    };
  }
  handleAddFarm = () => {
    const dataFarm = {
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      phone: this.state.phone,
      // name: "Nông trại mới",
      // address: "99 Man thiện",
      // email: "truongxuannghia140@gmail.com",
      // phone: "090452305",
    };
    console.log(dataFarm);
    addFarmPostData(dataFarm)
      .then((res) => {
        console.log(res);
        // this.props.addFarm(dataFarm);
        const token = localStorage.token;
        this.props.fetchDataFarm(token);
        alert("Thêm trại thành công");
      })
      .catch((err) => console.log(err));

    // this.props.navigation.navigate("dashboard");
    //api post data farm
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
                Thêm trang trại
              </Text>
            </View>
            <View style={styles.inputcomponent}>
              <TouchableOpacity>
                <TextInput
                  style={styles.input}
                  TextContentType="emaiAddress"
                  keyboardType="email-address"
                  placeholder="Nhập tên trang trại"
                  onChangeText={(text) => this.setState({ name: text })}
                ></TextInput>
              </TouchableOpacity>
            </View>
            <View style={styles.inputcomponent}>
              <TextInput
                style={styles.input}
                placeholder="Nhập địa chỉ"
                onChangeText={(text) => this.setState({ address: text })}
              ></TextInput>
            </View>
            <View style={styles.inputcomponent}>
              <TextInput
                style={styles.input}
                TextContentType="emaiAddress"
                keyboardType="email-address"
                placeholder="Nhập email"
                onChangeText={(text) => this.setState({ email: text })}
              ></TextInput>
            </View>
            <View style={styles.inputcomponent}>
              <TextInput
                style={styles.input}
                TextContentType="emaiAddress"
                keyboardType="email-address"
                placeholder="Nhập số điện thoại"
                onChangeText={(text) => this.setState({ phone: text })}
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
              <Text style={{ fontSize: 20, color: "#fff" }}>
                Thêm trang trại
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default connect(null, { addFarm, fetchDataFarm })(AddFarm);
