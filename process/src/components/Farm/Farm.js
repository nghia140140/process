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
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { connect } from "react-redux";
import { actiongetFarmseason } from "../../redux/action/Farm/actionFarmseason";
import { updateIdFarm } from "../../redux/action/Farm/addFarmseason";

var { height, width } = Dimensions.get("window");

class Farm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // data: this.props.myFarm,
  //   };
  // }
  // navigationFarmseason = () => {
  //   const farmingSeasons = this.props.myFarm;
  //   this.props.navFarmseason(farmingSeasons);
  // };
  navigationFarmseason = () => {
    const { id, farmingSeasons } = this.props.myFarm;
    this.props.updateIdFarm(id);
    this.props.actiongetFarmseason(farmingSeasons);
    this.props.navFarmseason();
  };
  render() {
    const {
      code,
      email,
      farmingSeasonNumber,
      id,
      address,
      name,
      phone,
      status,
      farmingSeasons,
    } = this.props.myFarm;
    const imagePath = "../../image/farm.png";
    return (
      <View>
        <TouchableOpacity onPress={this.navigationFarmseason}>
          <View style={{ height: 3 }}></View>
          <View
            style={{
              width: width,
              flexDirection: "row",
              backgroundColor: "#fff",
            }}
          >
            <View style={{ flex: 1 }}>
              <Image
                style={{ width: width / 3, height: 100, borderRadius: 30 }}
                // resizeMode="contain"
                source={require(imagePath)}
              />
            </View>
            <View style={{ flex: 2, alignItems: "center" }}>
              <Text style={{ fontSize: 30 }}>{name}</Text>
              <Text>SĐT: {phone}</Text>
              <Text>Địa chỉ: {address}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
// const mapDispatchToProps = (dispatch) => ({
//   dispatch,
//   actiongetFarmseason,
// });
export default connect(null, { actiongetFarmseason, updateIdFarm })(Farm);
