import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker,
} from "react-native";
import { connect } from "react-redux";
import RNPickerSelect from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome5";
import DateTimePicker from "@react-native-community/datetimepicker";

import fetchDataCultivation from "../../redux/action/Farm/fetchDataCultivation";
import addDataFarmseason from "../../redux/action/Farm/addDataFarmseason";
import { fetchDataFarm } from "../../redux/action/Farm/actionFetchFarm";

var { height, width } = Dimensions.get("window");
import { styles } from "./stylesAddProcess";

class AddProcess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      note: "",
      description: "",
      startDate: "",
      endDate: "",
      date: new Date(),
      showStartDate: false,
      showEndDate: false,
      idCulti: 0,
      idStep: 0,
      culti: [],
      cultivationSteps: [],
      dataStep: [],
      //state of date staep
      showStep: true,
      showTimepickerStep: false,
      dateOfStep: "Chon ngay",
      dataDateTimeOfStep: new Date(),
      seasonProcesses: {},
      dataFarmseason: this.props.dataFarmseason,
      // dataFarmseason: {
      //   name: "Farm Season Winter 1",
      //   description: "Winter 2020 Season 1 of 3",
      //   sowingDate: "2020-11-17T00:00:00Z",
      //   harvestDate: "2021-05-17T00:00:00Z",
      //   seed: "Cây Xoài",
      //   totalCrop: 4,
      //   status: "ACTIVATED",
      //   cultivationHistories: [],
      //   farmId: 752,
      //   seasonProcesses: [],
      // },
    };
  }
  componentDidMount() {
    const { dataCultivation } = this.props;
    this.setState({
      culti: dataCultivation,
      idCulti: dataCultivation[0].id,
      cultivationSteps: dataCultivation[0].cultivationSteps,
    });
    if (dataCultivation[0].cultivationSteps.length > 0) {
      this.setState({
        idStep: dataCultivation[0].cultivationSteps[0].id,
      });
    }
  }
  handleAddFarmseason = () => {
    console.log("Step: ");
    console.log(this.state.dataStep);
    console.log("Process Season: ");
    console.log(this.state.seasonProcesses);
    console.log(this.state.dataFarmseason);
    console.log("dateTime");
    // // console.log(dataDateTimeOfStep.toString);
    // // let x = Date.parse(this.state.dataDateTimeOfStep);
    // let x = this.state.dataDateTimeOfStep.toString();
    // console.log(x);
    addDataFarmseason(this.state.dataFarmseason)
      .then((res) => {
        console.log(res);
        alert("Thêm trại thành công");
        const token = localStorage.token;
        this.props.fetchDataFarm(token);
      })
      .catch((err) => console.log(err));
  };
  addNewProcess = () => {
    console.log(this.state.seasonProcesses);
    if (this.state.culti.length > 1) {
      const cultiData = this.state.culti.filter(
        (data) => data.id != this.state.idCulti
      );
      this.setState({
        culti: cultiData,
        dataStep: [],
        idCulti: cultiData[0].id,
        cultivationSteps: cultiData[0].cultivationSteps,
      });
      console.log(cultiData);
      if (cultiData[0].cultivationSteps.length > 0) {
        this.setState({
          idStep: cultiData[0].cultivationSteps[0].id,
        });
      }
    } else {
      alert("đã hoàn tất mọi quy trình");
    }
  };
  addStep = () => {
    console.log("id culti");
    console.log(this.state.idCulti);
    console.log("id Step");
    console.log(this.state.idStep);
    const { dataCultivation } = this.props;
    let step = {
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      interval: 3,
      afterDays: 3,
      startHour: 3,
      // status: "",
      note: "",
    };

    let process = {
      cultivationProcessId: this.state.idCulti,
      name: "",
      note: "",
      description: "",
      stepsNumber: 3,
      interval: 3,
      // status: "",
      startDate: "",
      endDate: "",
      ratings: "",
      seasonProcessSteps: [],
    };
    step.startDate = this.state.dataDateTimeOfStep;
    process.startDate = this.state.dataDateTimeOfStep;
    this.state.culti.map((e) => {
      if (e.id == this.state.idCulti) {
        e.cultivationSteps.map((data) => {
          if (data.id == this.state.idStep) {
            step.name = data.name;
            step.description = data.description;
            step.note = data.note;
          }
        });
        process.name = e.name;
        process.note = e.note;
        process.description = e.name;
        process.stepsNumber = e.stepsNumber;
        process.interval = e.interval;
        // process.status = e.status;
        // process.startDate = e.startDate;
        process.endDate = e.endDate;
        process.ratings = e.ratings;
      }
    });
    console.log(step);
    if (this.state.dataStep.length == 0) {
      this.setState({
        dataStep: [step],
      });
    } else {
      this.setState({
        dataStep: this.state.dataStep.concat([step]),
      });
    }
    process.seasonProcessSteps = this.state.dataStep.concat([step]);
    this.setState({
      seasonProcesses: process,
    });
    // if (this.state.dataFarmseason.seasonProcesses.length == 0) {
    let dataFarmseasonTemp = this.state.dataFarmseason;
    if (dataFarmseasonTemp.seasonProcesses.length == 0) {
      dataFarmseasonTemp.seasonProcesses = [process];
    } else {
      dataFarmseasonTemp.seasonProcesses = dataFarmseasonTemp.seasonProcesses.concat(
        [process]
      );
    }
    this.setState({
      dataFarmseason: dataFarmseasonTemp,
    });
    // }
    console.log(step);
    console.log(process);
  };

  navigationHome = () => {
    this.props.navigation.navigate("dashboard");
  };
  updateCulti = (value) => {
    console.log(value);
    let dataCulti = [];
    this.state.culti.map((e) => {
      if (e.id == value) {
        dataCulti = e.cultivationSteps;
      }
    });
    this.setState({
      idCulti: value,
      cultivationSteps: dataCulti,
      showStep: true,
    });
    if (dataCulti.cultivationSteps.length > 0) {
      this.setState({
        idStep: dataCulti.cultivationSteps[0].id,
      });
    }
  };

  updateStep = (value) => {
    console.log(value);
    this.setState({ idStep: value });
  };
  showDateStep = () => {
    this.setState({ showTimepickerStep: true });
  };

  onChangeDateOfStep = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    const DateTime =
      currentDate.getDate() +
      "-" +
      (currentDate.getMonth() + 1) +
      "-" +
      currentDate.getFullYear();
    console.log(DateTime);
    this.setState({
      showTimepickerStep: Platform.OS === "ios",
      dataDateTimeOfStep: currentDate,
      dateOfStep: DateTime,
    });
  };
  render() {
    const { dataCultivation } = this.props;
    const piker = () => {
      console.log(dataCultivation);
      console.log(this.state.value);
    };
    return (
      <View style={{ marginTop: 25, flex: 1 }}>
        <ScrollView>
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
              justifyContent: "space-between",
              flexDirection: "column",
              // alignItems: "stretch",
            }}
          >
            <View style={{}}>
              <View
                style={{
                  // marginTop: 10,
                  justifyContent: "center",
                  flexDirection: "row",
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{ fontSize: 30, color: "#f00", fontWeight: "bold" }}
                >
                  Tạo quy trình
                </Text>
              </View>
              <View>
                {this.state.dataFarmseason.seasonProcesses.map((e) => {
                  return (
                    <View>
                      <Text>{e.name}</Text>
                      {e.seasonProcessSteps.map((data) => {
                        return (
                          <View style={{ marginLeft: 30, flexDirection: "row" }}>
                            <Text>{data.name}</Text>
                            <Text>{data.startDate}</Text>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <View style={{ justifyContent: "center" }}>
                    <Text style={{ fontSize: 16 }}>Chọn quy trình:</Text>
                  </View>
                  <View
                    style={{
                      borderRadius: 5,
                      width: 3 * (width / 5),
                      justifyContent: "center",
                      borderColor: "#47bf6f",
                      borderWidth: 1,
                    }}
                  >
                    <Picker
                      selectedValue={this.state.idCulti}
                      style={{
                        height: 40,
                        width: 3 * (width / 5),
                        borderColor: "#47bf6f",
                        borderWidth: 1,
                      }}
                      onValueChange={this.updateCulti}
                    >
                      {this.state.culti.map((data) => {
                        return (
                          <Picker.Item label={data.name} value={data.id} />
                        );
                      })}
                    </Picker>
                  </View>
                </View>
                {/* {this.state.dataStep.length == 0 ? null : (
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "#7d7076",
                      marginTop: 10,
                    }}
                  >
                    {this.state.dataStep.map((e) => {
                      return (
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text>{e.name}</Text>
                          <Text>{e.status}</Text>
                        </View>
                      );
                    })}
                  </View>
                )} */}
                {this.state.showStep && (
                  <View style={{ flexDirection: "row", marginTop: 30 }}>
                    <View
                      style={{
                        borderRadius: 5,
                        width: width / 2,
                        justifyContent: "center",
                        borderColor: "#47bf6f",
                        borderWidth: 1,
                      }}
                    >
                      <Picker
                        selectedValue={this.state.idStep}
                        style={{
                          height: 40,
                          width: width / 2,
                          borderColor: "#47bf6f",
                          borderWidth: 1,
                        }}
                        onValueChange={this.updateStep}
                      >
                        {this.state.cultivationSteps.map((data, index) => {
                          return (
                            <Picker.Item label={data.name} value={data.id} />
                          );
                        })}
                      </Picker>
                    </View>
                    <View
                      style={{
                        borderRadius: 10,
                        marginLeft: 10,
                        height: 40,
                        backgroundColor: "#fff",
                        width: 2 * (width / 7),
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: "#7d7076" }}>
                        {this.state.dateOfStep}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={this.showDateStep}
                      style={{ marginLeft: 10 }}
                    >
                      <Icon name={"calendar-alt"} size={38} color={"black"} />
                    </TouchableOpacity>
                  </View>
                )}

                <View
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                    marginTop: 20,
                  }}
                >
                  <TouchableOpacity onPress={this.addStep}>
                    <Text style={{ color: "blue" }}>Thêm bước</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <TouchableOpacity
                  onPress={this.addNewProcess}
                  style={{
                    backgroundColor: "#b57a31",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <Text>Thêm quy trình mới</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity
                onPress={this.handleAddFarmseason}
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
                  Tạo quy trình
                </Text>
              </TouchableOpacity>
              <Text></Text>
            </View>
          </View>
          {this.state.showTimepickerStep && (
            <DateTimePicker
              testID="dateTimePicker"
              value={this.state.date}
              mode={"date"}
              is24Hour={true}
              display="default"
              onChange={this.onChangeDateOfStep}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    dataCultivation: state.dataCultivation,
    dataFarmseason: state.addFarmseason,
  };
}
export default connect(mapStateToProps, {
  fetchDataCultivation,
  fetchDataFarm,
})(AddProcess);
