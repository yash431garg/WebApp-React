import React from "react";
import { Route, Switch } from "react-router-dom";
import Blogs from "./blogs/Blogs.js";
import MainFinance from "./Finance/MainFinance";
import Inventory from "./inventoryManagement/Invetory";
import Invoice from "./InvoiceGeneration/Invoice";
import ManageInvoiceTable from "./InvoiceManagement/ManageInvoiceTable";
import LoginMain from "./login/LoginMain";
import NotFound from "./NotFound";
import Page from "./Profile_Page/Page";
import StaffAdminDashboard from "./staffManagement/StaffAdminDashboard";
import StaffManagement from "./staffManagement/StaffManagement";

// this function routes through different components by checking urlpath.
function Routes() {
  return (
    <Switch>
      <Route exact path="#remainder" component={MainFinance} />
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
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
