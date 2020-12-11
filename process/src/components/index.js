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
import ListFarmseason from './FarmSeason/index';
import ListProcess from './Process/index';
import AddFarm from './Farm/AddFarm';
import AddFarmseason from './FarmSeason/AddFarmseason';
import AddProcess from './Process/AddProcess';
import Profile from './User/Profile/index';



import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

var { width } = Dimensions.get("window");
console.disableYellowBox = true;
class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="dashboard">
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
            name="profile"
            component={Profile}
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
            name="addfarm"
            component={AddFarm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            style={{ backgroundColor: "black" }}
            name="farmSeason"
            component={ListFarmseason}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            style={{ backgroundColor: "black" }}
            name="addfarmseason"
            component={AddFarmseason}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            style={{ backgroundColor: "black" }}
            name="process"
            component={ListProcess}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            style={{ backgroundColor: "black" }}
            name="addprocess"
            component={AddProcess}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default connect()(Main);