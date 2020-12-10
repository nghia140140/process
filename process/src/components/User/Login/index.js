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
  Image,
} from "react-native";
// im lib
// import {connect} from 'react-redux';
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/FontAwesome5";

// import Header from "../../Header";
import Divider from "./Divider";
// //styles
import { styles } from "./styles";
// // api
// import apiLogin from '../../api/handleLogin';
import handleLogin from "../../../redux/api/User/handleLogin";

const { height, width } = Dimensions.get("window");
console.disableYellowBox = true;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      secureTextEntry: false,
    };
  }
  _Login() {
    const login = {
      username: this.state.username,
      password: this.state.password,
    };
    handleLogin(login)
      .then((res) => {
        console.log(res);
        this.props.navigation.navigate("dashboard");
      })
      .catch((err) => console.log(err));
  }
  navigationRegister = () => {
    this.props.navigation.navigate("register");
  };
  render() {
    const nameIconEye = this.state.secureTextEntry ? "eye-slash" : "eye";
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* <Header /> */}
          <View style={styles.up}>
            <Text style={styles.title}>Sign in</Text>
          </View>
          <View style={styles.down}>
            <View>
              <Text style={styles.error}>{this.state.error}</Text>
            </View>
            <View style={styles.inputcomponent}>
              <TextInput
                style={styles.input}
                TextContentType="emaiAddress"
                keyboardType="email-address"
                placeholder="Nhập email"
                onChangeText={(text) => this.setState({ username: text })}
              ></TextInput>
            </View>
            <View style={styles.inputcomponent}>
              <View
                style={{
                  ...styles.input,
                  flexDirection: "row",
                }}
              >
                <TextInput
                  style={{ flex: 9 }}
                  placeholder="Nhập mật khẩu"
                  secureTextEntry={this.state.secureTextEntry}
                  onChangeText={(text) => this.setState({ password: text })}
                ></TextInput>
                <TouchableOpacity
                  onPress={() => this._secureTextEntry()}
                  style={{ flex: 1, top: 10 }}
                >
                  <Icon name={nameIconEye} size={20} color={"black"} />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => this._Login()}
            >
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
            <Divider style={styles.devider}></Divider>
            <FontAwesome.Button
              name="facebook"
              backgroundColor="#3b5998"
              style={styles.facebook}
            >
              <Text style={{ color: "#fff" }}>Login with Facebook</Text>
            </FontAwesome.Button>
            <TouchableOpacity
              style={{
                ...styles.btnLogin,
                backgroundColor: "#333",
              }}
              onPress={this.navigationRegister}
            >
              <Text style={styles.login}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}
export default Login;
