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
  fet = () => {
    const { farmingSeasons } = this.props.myFarm;
    this.props.actiongetFarmseason(farmingSeasons);
  };
  navigationFarmseason = () => {
    this.fet();
    const { farmingSeasons } = this.props.myFarm;
    this.props.navFarmseason({ farmingSeasons });
  };
  render() {
    const {
      code,
      email,
      farmingSeasonNumber,
      id,
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
                style={{ width: width / 3, height: 100 }}
                resizeMode="contain"
                source={require(imagePath)}
              />
            </View>
            <View style={{ flex: 2 }}>
              <Text style={{ fontSize: 30 }}>{name}</Text>
              <Text>{phone}</Text>
              <Text>{status}</Text>
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
export default connect(null, { actiongetFarmseason })(Farm);
