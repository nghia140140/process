import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Switch,
  Animated,
  Keyboard,
  StyleSheet,
  ImageBackground,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import Farmseason from "./FarmSeason";

// import Header from "../../Header/index";

import { connect } from "react-redux";
var { height, width } = Dimensions.get("window");
class ListFarmseason extends Component {
  navigationProcess = () => {
    this.props.navigation.navigate("process");
  };
  navigationHome = () => {
    this.props.navigation.navigate("dashboard");
  };
  navigationAddFarmSeason = () => {
    this.props.navigation.navigate("addfarmseason");
  };
  render() {
    const { dataFarmseason } = this.props;
    return (
      <View style={{ marginTop: 25 }}>
        <View
          style={{
            height: 50,
            backgroundColor: "#333",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#333",
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
            <TouchableOpacity onPress={this.navigationAddFarmSeason}>
              <Text style={{ color: "#fff" }}>Tạo mùa vụ</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,
              color: "#f00",
              justifyContent: "center",
            }}
          >
            Mùa Vụ
          </Text>
        </View>
        {dataFarmseason.length == 0 ? (
          <View style={{justifyContent: 'center', marginTop: 50, padding: 20}}>
            <Text style={{fontSize: 30, color: '#f00'}}>Hiện tại chưa có mùa vụ nào, vui lòng tạo mới</Text>
          </View>
        ) : (
          <View>
            <FlatList
              data={dataFarmseason}
              renderItem={({ item }) => (
                <Farmseason myFarm={item} navProcess={this.navigationProcess} />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    dataFarmseason: state.dataFarmseason,
  };
}
export default connect(mapStateToProps)(ListFarmseason);
