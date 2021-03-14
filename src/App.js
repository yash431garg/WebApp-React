import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./components/redux-state-management/store";
import Routes from "./components/Routes/Routes";
import Header from "./components/Header/Header";
import AuthContextProvider from "./containers/AuthContext";
//Entry point for the App
class App extends Component {
  componentDidMount() { }
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <AuthContextProvider>
            <Header />
            <main id="app">
              <Routes />
            </main>
          </AuthContextProvider>
        </React.Fragment>
      </Provider>
    );
  }
}
export default App;
