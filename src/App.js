import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./components/redux-state-management/store";
import Routes from "./components/Routes";
import Header from "./components/Header/Header";
//Entry point for the App
class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <main id="app">
            <Routes />
          </main>
        </React.Fragment>
      </Provider>
    );
  }
}
export default App;
