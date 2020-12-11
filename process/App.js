import React, { Component } from "react";
import "localstorage-polyfill";
import Main from "./src/components/index";

import store from "./src/redux/store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
