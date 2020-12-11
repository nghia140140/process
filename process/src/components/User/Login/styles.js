import React from 'react';

import {StyleSheet, Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#e9ebee',
  },
  image: {
    backgroundColor: '#fff',
    marginTop: 100,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  title: {
    color: '#333',
    marginTop: 10,
    fontSize: 25,
  },
  up: {
    marginTop: 20,
    flex: 4,
    alignItems: 'center',
  },
  down: {
    flex: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: '#333',
    marginTop: 10,
    fontSize: 25,
  },
  inputcomponent: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  input: {
    paddingLeft: 10,
    width: width - 40,
    height: 45,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 3,
    marginRight: 15,
  },
  login: {
    fontSize: 18,
    color: '#fff',
  },
  btnLogin: {
    marginTop: 15,
    width: 280,
    height: 45,
    backgroundColor: '#27AE60',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebook: {
    width: 280,
    height: 45,
    justifyContent: 'center',
    borderRadius: 5,
  },
  devider: {
    width: 280,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: '#9e0e39',
    fontStyle: 'italic',
    fontSize: 12,
    marginBottom: 10,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
  },
});
export {styles};
