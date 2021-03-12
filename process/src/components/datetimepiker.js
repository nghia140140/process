import React, { Component } from "react";
import { View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      mode: "",
      show: false,
    };
  }
  render() {
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || this.state.date;
      selectedDate = selectedDate.setDate(selectedDate.getDate() + 1);
      this.setState({ show: Platform.OS === "ios", date: currentDate });
    };
    const log = () => {
      console.log(this.state.date);
    };

    const showMode = (currentMode) => {
      this.setState({ show: true, mode: currentMode });
    };

    const showDatepicker = () => {
      //   this.setState({ mode: "date" });
      showMode("date");
    };

    const showTimepicker = () => {
      //   this.setState({ mode: "time" });
      showMode("time");
    };

    return (
      <View style={{ marginTop: 50 }}>
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
        <View>
          <Button onPress={log} title="Show date picker!" />
        </View>
        {this.state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.date}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    );
  }
}
