import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import {connect} from 'react-redux';
// TODO : Import Component
import Login from "./User/Login/index";
import Register from "./User/Register/index";
import Menu from "./Menu/index";
import Dashboard from './Dashboard/index';
import ListFarmseason from './Farm/FarmSeason/index';



import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

var { width } = Dimensions.get("window");
console.disableYellowBox = true;
class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="farmSeason">
          <Stack.Screen
            style={{ backgroundColor: "black" }}
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            style={{ backgroundColor: "black" }}
            name="register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            style={{ backgroundColor: "black" }}
            name="menu"
            component={Menu}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            style={{ backgroundColor: "black" }}
            name="dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            style={{ backgroundColor: "black" }}
            name="farmSeason"
            component={ListFarmseason}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            style={{ backgroundColor: "black" }}
            name="farmSeason"
            component={ListFarmseason}
            options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default connect()(Main);