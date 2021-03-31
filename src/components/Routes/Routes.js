import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../About/About";
import BigAbout from "../blogs/BigAbout";
import Feature from "../blogs/Feature";
import Score from "../blogs/Score";
import PaymentDues from "../Finance/Dues/PaymentDues";
import MainFinance from "../Finance/MainFinance";
import PaymentReminders from "../Finance/Reminders/PaymentReminders";
import { TransactionsTable } from "../Finance/TransactionTable/TransactionsTable";
import Dashboard from "../Home/Dashboard";
import Home from "../Home/Home";
import Inventory from "../inventoryManagement/Invetory";
import Invoice from "../InvoiceGeneration/Invoice";
import ManageInvoice from "../InvoiceManagement/ManageInvoice";
import LoginMain from "../login/LoginMain";
import RegisterMain from "../login/RegisterMain";
import NotFound from "../NotFound";
import Page from "../Profile_Page/Page";
import RegistrationPage from "../Registration/Registration_Page";
import StaffAdminDashboard from "../staffManagement/StaffAdminDashboard";
import StaffManagement from "../staffManagement/StaffManagement";
import PrivateRoute from "./PrivateRoute";
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

      <Route exact path="/transaction" component={TransactionsTable} />
      <Route exact path="/remainders" component={PaymentReminders} />
      <Route exact path="/dues" component={PaymentDues} />
      <Route exact path="/register" component={RegisterMain} />

      {/* public Routes */}
      <Route exact path="/about" component={About} />
      <Route exact path="#blog_id" component={Home} />
      <Route exact path="#contact_id" component={Home} />
      <Route exact path="#feature_id" component={Home} />
      <Route exact path="/AboutBigBusiness" component={BigAbout} />
      <Route exact path="/FeaturesBigBusiness" component={Feature} />
      <Route exact path="/BusinessScore" component={Score} />
      <Route exact path="/RegistrationPage" component={RegistrationPage} />
      <Route exact path="/" component={Home} />
      {/* <PrivateRoute exact path="/" component={Home} /> */}
      {/* <Route exact path="/MainFinance" component={MainFinance} /> */}
      <Route exact path="/login" component={LoginMain} />
      <Route exact path="/dashboard" component={Dashboard} />
      {/* <Route exact path="/page" component={Page} /> */}
      <PrivateRoute exact path="/mainfinance" component={MainFinance} />
      <PrivateRoute exact path="/staff" component={StaffManagement} />
      <PrivateRoute exact path="/inventory" component={Inventory} />
      <PrivateRoute exact path="/invoice" component={Invoice} />
      <PrivateRoute exact path="/invoicemanage" component={ManageInvoice} />
      <PrivateRoute exact path="/Page" component={Page} />
      <PrivateRoute exact path="/admin" component={StaffAdminDashboard} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
