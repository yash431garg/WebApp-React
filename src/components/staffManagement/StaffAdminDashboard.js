import React, { useEffect, useState } from "react";
import { getDay, getDate } from "date-fns";

import { ListGroup } from "react-bootstrap";
import "react-nice-dates/build/style.css";
import { connect } from "react-redux";
import firebase from "../../containers/Firebase";
import { setAdminEmployeeDataView } from "../redux-state-management/actionCreators";
import AdminViewEmployeeHolidays from "./AdminViewEmployeeHolidays";

import Header1 from "../Header1/Header1";
import Sidebar from "../Sidebar/Sidebar";
import ChatView from "./ChatView";
import "./css/StaffManagement.css";

const StaffAdminDashboard = (props) => {
  let holidayList = [];
  let modifiers = {
    disabled: (date) => getDay(date) === 6, // Disables Saturdays
    holidays: (date) => getDate(date) === 2, // Highlights Tuesdays
    leaves: (date) => getDate(date) === 3,
  };
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    firebase.database.ref("Users/uid1").child("staffDetails").on("value", function (snapshot) {
      let json = snapshot.val();
      let keys = Object.keys(json);
      let vals = Object.values(json);
      for (let i = 0; i < keys.length; i++) {
        vals[i].id = keys[i];
      }
      setEmployeesData(vals);
    });
  }, []);
  let leaves = ["23-01-2020", "21-01-2019"];
  let holidays = ["23-01-2020", "21-01-2019"];
  return (
    <div className="adminDashboard">
      <Header1 />
      <div className='web_body'>
        <Sidebar />
        <div className='sideContent'>
          <h2 className='serviceHeader'>Staff Management</h2>
          <div className='adminContent'>
            <div className="admin_staff">
              {employeesData.map((staffMember) => {
                return (
                  <ListGroup.Item
                    onClick={(e) => props.changeEmployeeData({ staffMember })}
                  >
                    {staffMember.firstName} {staffMember.lastName}
                  </ListGroup.Item>
                );
              })}
            </div>
            <ChatView className="chatView"></ChatView>
            <div className="attendanceView">
              <AdminViewEmployeeHolidays leaves={leaves} holidays={holidays} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({ employeeData: state.employeeData });
const mapDispatchToProps = (dispatch) => ({
  changeEmployeeData(employeeData) {
    dispatch(setAdminEmployeeDataView(employeeData));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffAdminDashboard);
