import React from "react";
// import React from 'react';
import { Switch, Route } from "react-router-dom";
// import Transaction from '../containers/Transaction';
// import Header from './Header/Header';
import NotFound from "./NotFound";
// import TransactionsTable from '../components/Finance/Tables/TransactionsTable';
import MainFinance from "./Finance/MainFinance";
import Page from "./Profile_Page/Page";
// import index from '../App';

// this function routes through different components by checking urlpath.
function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <h1 style={{ marginLeft: "35%", marginTop: "18%" }}>
              Welcome to HomePage.
            </h1>
            <p
              className="active"
              style={{ display: "inline-block", marginLeft: "45%" }}
            >
              click on finance!
            </p>
          </div>
        )}
      />
      <Route exact path="/MainFinance" component={MainFinance} />
      {/* <Route exact path='/table' component={TransactionsTable} /> */}
      <Route exact path="/Page" component={Page} />
      <Route exact path="#remain" component={MainFinance} />
      <Route exact path="#due" component={MainFinance} />
    </Switch>
  );
}

export default Routes;
