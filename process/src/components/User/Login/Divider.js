import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Divider = (props) => {
  return (
    <View {...props}>
      <View style={styles.line}></View>
      <Text style={styles.textOr}>OR</Text>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    flex: 2,
    height: 1,
    backgroundColor: '#000',
  },
  textOr: {
    textAlign: 'center',
    flex: 1,
  },
});
export default Divider;
