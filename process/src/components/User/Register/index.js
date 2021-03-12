import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
  ScrollView,
  StyleSheet,
} from "react-native";
// import Header from "../../Header";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";

import handleRegister from "../../../redux/api/User/handleRegister";
import error from "../../../configs/Error/index";
import { connect } from "react-redux";

var { height, width } = Dimensions.get("window");
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      nameIcon: "md-eye",
      name: "",
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirm: "",
      phone: "",
      address: "",
      errorFirstName: "",
      errorLastName: "",
      errorUsername: "",
      errorEmail: "",
      errorPassword: "",
      errorPhone: "",
      errorAddress: "",
      errorConfirm: "",
    };
  }
  _register() {
    this.setState({
      // errorName: "",
      errorEmail: "",
      errorPassword: "",
      errorPhone: "",
      errorAddress: "",
      errorConfirm: "",
    });
    let body = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      role: ["ROLE_USER"],
      password: this.state.password,
    };
    // TODO : Validation Zone
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      this.state.firstname.trim().length == 0
    ) {
      this.setState({ errorFirstName: error.chua_nhap_ho });
    } else if (
      this.state.lastname.trim().length == 0
    ) {
      this.setState({ errorLastName: error.chua_nhap_ten });
    } else if (
      this.state.lastname.trim().length == 0
    ) {
      this.setState({ errorEmail: error.chua_nhap_email });
    } else if (reg.test(this.state.email) !== true) {
      this.setState({ errorEmail: error.dinh_dang_email_loi });
    } else if (
      this.state.password.trim().length < 6 ||
      this.state.password.trim().length > 50
    ) {
      this.setState({ errorPassword: error.dinh_dang_mat_khau });
    } else if (
      this.state.confirm.trim().length < 6 ||
      this.state.confirm.trim().length > 50
    ) {
      this.setState({ errorConfirm: error.dinh_dang_mat_khau });
    } else if (this.state.password != this.state.confirm) {
      this.setState({ errorConfirm: error.mat_khau_khong_khop });
    } else {
    handleRegister(body)
      .then((data) => {
        if (data) alert("Đăng Ký Thành Công");
        console.log(data);
        // this.props.navigation.navigate("login");
      })
      .catch((error) => {
        alert("Error server:" + error);
      })
      .done();
    }
  }
  _hidePass() {
    var name = "";
    if (this.state.nameIcon == "md-eye") {
      name = "md-eye-off";
    } else {
      name = "md-eye";
    }
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
      nameIcon: name,
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* <Header /> */}
          <View style={styles.up}>
            <Text style={styles.header}>Registration</Text>
          </View>
          <View style={styles.down}>
            {/* name */}
            <View style={styles.inputcomponent}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.label}>FirstName: </Text>
                <Text style={styles.textError}>{this.state.errorFirstName}</Text>
              </View>

              <TextInput
                ref="name"
                style={styles.input}
                placeholder="Enter your firstname"
                onChangeText={(text) => this.setState({ firstname: text })}
              ></TextInput>
            </View>
            <View style={styles.inputcomponent}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.label}>Lastname: </Text>
                <Text style={styles.textError}>{this.state.errorLastName}</Text>
              </View>

              <TextInput
                ref="name"
                style={styles.input}
                placeholder="Enter your lastname"
                onChangeText={(text) => this.setState({ lastname: text })}
              ></TextInput>
            </View>
            {/* username */}
            <View style={styles.inputcomponent}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.label}>Username: </Text>
                <Text style={styles.textError}>{this.state.errorUsername}</Text>
              </View>
              <TextInput
                ref="phone"
                style={styles.input}
                placeholder="Enter your username"
                onChangeText={(text) => this.setState({ username: text })}
              ></TextInput>
            </View>
            {/* email */}
            <View style={styles.inputcomponent}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.label}>Email: </Text>
                <Text style={styles.textError}>{this.state.errorEmail}</Text>
              </View>
              <TextInput
                ref="email"
                style={styles.input}
                TextContentType="emaiAddress"
                keyboardType="email-address"
                placeholder="Enter your email"
                onChangeText={(text) => this.setState({ email: text })}
              ></TextInput>
            </View>
            {/* <View style={{ ...styles.inputcomponent, paddingLeft: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.label}>Address: </Text>
                <Text style={styles.textError}>{this.state.errorAddress}</Text>
              </View>
              <TextInput
                ref="phone"
                style={styles.input}
                placeholder="Enter your address"
                onChangeText={(text) => this.setState({ address: text })}
              ></TextInput>
            </View> */}
            {/* password */}
            <View style={styles.inputcomponent}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ ...styles.label, left: 10 }}>Password: </Text>
                <Text style={{ ...styles.textError, marginLeft: 10 }}>
                  {this.state.errorPassword}
                </Text>
              </View>
              <View style={styles.password}>
                <TextInput
                  ref="password"
                  style={styles.input}
                  placeholder="Enter your password"
                  secureTextEntry={this.state.secureTextEntry}
                  onChangeText={(text) => this.setState({ password: text })}
                ></TextInput>
                <TouchableOpacity
                  onPress={() => this._hidePass()}
                  style={{ positon: "absolute", right: 30, top: 10 }}
                >
                  <Icon name={this.state.nameIcon} size={20} color={"black"} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputcomponent}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ ...styles.label, left: 10 }}>
                  Confirm password:
                </Text>
                <Text style={styles.textError}>{this.state.errorConfirm}</Text>
              </View>
              <View style={styles.password}>
                <TextInput
                  ref="confirm"
                  style={styles.input}
                  placeholder="Enter your password"
                  secureTextEntry={this.state.secureTextEntry}
                  onChangeText={(text) => this.setState({ confirm: text })}
                ></TextInput>
                <TouchableOpacity
                  onPress={() => this._hidePass()}
                  style={{ positon: "absolute", right: 30, top: 10 }}
                >
                  <Icon name={this.state.nameIcon} size={20} color={"black"} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={{
                ...styles.btnLogin,
                backgroundColor: "#0450c2",
              }}
              onPress={() => this._register()}
            >
              <Text style={styles.login}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.btnLogin, marginTop: 10 }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text style={styles.login}>Back to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default connect()(Register);
