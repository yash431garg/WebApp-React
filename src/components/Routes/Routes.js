import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../NotFound";
import StaffManagement from "../staffManagement/StaffManagement";
import StaffAdminDashboard from "../staffManagement/StaffAdminDashboard";
import BigAbout from "../blogs/BigAbout";
import Feature from "../blogs/Feature";
import Score from "../blogs/Score";
import Inventory from "../inventoryManagement/Invetory";
import Invoice from "../InvoiceGeneration/Invoice";
import Page from "../Profile_Page/Page";
import MainFinance from "../Finance/MainFinance";
import LoginMain from "../login/LoginMain";
import ManageInvoiceTable from "../InvoiceManagement/ManageInvoiceTable";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Home/Dashboard";
import RegisterMain from "../login/RegisterMain";
import Home from "../Home/Home";
import About from "../About/About";

// this function routes through different components by checking urlpath.
function Routes() {
  return (
    <Switch>
      {/* <Route exact path="#remainder" component={MainFinance} />
            <Route exact path="#due" component={MainFinance} />
            <Route exact path="/MainFinance" component={MainFinance} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/Page" component={Page} />
            <Route exact path="/staff" component={StaffManagement} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/invoice" component={Invoice} />
            <Route exact path="/invoicemanage" component={ManageInvoiceTable} />
            <Route exact path="/admin" component={StaffAdminDashboard} />
            <Route exact path="/login" component={LoginMain} />
            <Route exact path="/about" component={About} />
            <Route exact path="*" component={Home} /> */}

      {/* public Routes */}
      <Route exact path="/about" component={About} />
      <Route exact path="#blog_id" component={Home} />

      <Route exact path="/AboutBigBusiness" component={BigAbout} />
      <Route exact path="/FeaturesBigBusiness" component={Feature} />
      <Route exact path="/BusinessScore" component={Score} />

      <Route exact path="/" component={Home} />
      {/* <PrivateRoute exact path="/" component={Home} /> */}
      <Route exact path="/login" component={LoginMain} />
      <PrivateRoute exact path="/mainfinance" component={MainFinance} />
      <PrivateRoute exact path="/register" component={RegisterMain} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />

      <PrivateRoute exact path="/Page" component={Page} />
      <PrivateRoute exact path="/staff" component={StaffManagement} />
      <PrivateRoute exact path="/inventory" component={Inventory} />
      <PrivateRoute exact path="/invoice" component={Invoice} />
      <PrivateRoute
        exact
        path="/invoicemanage"
        component={ManageInvoiceTable}
      />
      <PrivateRoute exact path="/admin" component={StaffAdminDashboard} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
