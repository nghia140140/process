import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
  Keyboard,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import { AsyncStorage } from "react-native";

import { styles } from "./StyleProfile";
import Icon from "react-native-vector-icons/FontAwesome5";
var { height, width } = Dimensions.get("window");

const iconLock = <Icon name="lock" size={13} color={"gray"} />;
const iconArrowLeft = <Icon name="arrow-left" size={20} color={"#fff"} />;
const iconPen = <Icon name="pen" size={13} color={"blue"} />;
const iconUser = <Icon name="user" size={15} color={"gray"} />;

const iconPhone = <Icon name="user" size={13} color={"gray"} />;
const iconEye_slash = <Icon name="eye-slash" size={13} color={"gray"} />;
const iconEye = <Icon name="eye" size={13} color={"gray"} />;
const iconAddress = <Icon name="map-marker" size={13} color={"gray"} />;
const line = (
  <View
    style={{ width: width - 40, height: 1, backgroundColor: "gray" }}
  ></View>
);

const line2 = (
  <View
    style={{ width: width - 130, height: 1, backgroundColor: "gray" }}
  ></View>
);
const lineHightlight = (
  <View
    style={{ width: width - 130, height: 2, backgroundColor: "blue" }}
  ></View>
);

import { connect } from "react-redux";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      username: "",
      name: "",
      phone: "",
      address: "",
      email: "",
      password: "",
      status: 0,
      passwordCurrent: "",
      passwordNew: "",
      passwordReTypeNew: "",
      edit: false,
      changePass: false,
      secureTextEntry: [true, true, true],
    };
  }
  componentDidMount() {
    const { firstname, lastname, email, username } = this.props.profile;
    this.setState({
      name: firstname + " " + lastname,
      email: email,
      username: username,
    });
    console.log("hello");
    console.log(username);
  }
  _hidenPassword(possition) {
    let temp = [...this.state.secureTextEntry];
    temp[possition] = !temp[possition];
    this.setState({ secureTextEntry: temp });
  }
  logout = () => {
    this.props.navigation.navigate("login");
  };
  render() {
    // const { profile } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            {iconArrowLeft}
          </TouchableOpacity>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>PROFILE</Text>
          <TouchableOpacity onPress={() => this.logout()}>
            <Text style={{ color: "#fff", fontSize: 12, fontWeight: "bold" }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.body}>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Image
              style={{ height: 160, width: 160, borderRadius: 80 }}
              resizeMode="contain"
              source={require("../../../image/user.png")}
            />
            <View style={styles.headerForm}>
              <Text style={{ fontSize: 14, color: "gray" }}>
                ACCOUNT DETAILS
              </Text>
              {this.state.edit == false ? (
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      edit: true,
                    })
                  }
                  style={{ flexDirection: "row" }}
                >
                  <Text
                    style={{ color: "blue", fontSize: 13, marginRight: 10 }}
                  >
                    Edit
                  </Text>
                  {iconPen}
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      edit: false,
                    })
                  }
                  style={{ flexDirection: "row" }}
                >
                  <Text style={{ color: "#000", fontSize: 13 }}>Cancel</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.infor}>
              <View style={styles.iconFirst}>{iconUser}</View>
              <View style={styles.formInput}>
                <View
                  style={{
                    heigth: 25,
                    justifyContent: "flex-end",
                  }}
                >
                  <Text style={styles.label}>Name</Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your name"
                  onChangeText={(text) => this.setState({ name: text })}
                  value={this.state.name}
                  editable={this.state.edit}
                ></TextInput>
              </View>
              <View style={styles.iconLast}>{iconLock}</View>
            </View>
            <View style={styles.line2}>
              {this.state.edit == false ? line2 : lineHightlight}
            </View>
            <View style={styles.infor}>
              <View style={styles.iconFirst}>{iconUser}</View>
              <View style={styles.formInput}>
                <View
                  style={{
                    heigth: 25,
                    justifyContent: "flex-end",
                  }}
                >
                  <Text style={styles.label}>Username</Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your username"
                  onChangeText={(text) => this.setState({ username: text })}
                  value={this.state.username}
                  editable={this.state.edit}
                ></TextInput>
              </View>
              <View style={styles.iconLast}>{iconLock}</View>
            </View>
            {/* <View style={styles.line2}>
              {this.state.edit == false ? line2 : lineHightlight}
            </View>
            <View style={styles.infor}>
              <View style={styles.iconFirst}>{iconAddress}</View>
              <View style={styles.formInput}>
                <View
                  style={{
                    heigth: 25,
                    justifyContent: "flex-end",
                  }}
                >
                  <Text style={styles.label}>address</Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your address"
                  onChangeText={(text) => this.setState({ address: text })}
                  value={this.state.address}
                  editable={this.state.edit}
                ></TextInput>
              </View>
              <View style={styles.iconLast}>{iconLock}</View>
            </View> */}
            <View style={styles.line2}>
              {this.state.edit == false ? line2 : lineHightlight}
            </View>
            <View style={styles.infor}>
              <View style={styles.iconFirst}>{iconLock}</View>
              <View style={styles.formInput}>
                <View
                  style={{
                    heigth: 25,
                    justifyContent: "flex-end",
                  }}
                >
                  <Text style={styles.label}>Email</Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  onChangeText={(text) => this.setState({ email: text })}
                  value={this.state.email}
                  editable={this.state.edit}
                ></TextInput>
              </View>
              <View style={styles.iconLast}>{iconLock}</View>
            </View>
            <View style={styles.line2}>
              {this.state.edit == false ? line2 : lineHightlight}
            </View>
            <View style={{ height: 18 }}></View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}
export default connect(mapStateToProps)(Profile);
