import React, { Component } from "react";
import { getDay, getDate } from "date-fns";
import { ListGroup } from "react-bootstrap";
import { Card, Table, Button } from "react-bootstrap";
import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { StaffList } from "./StaffList";
import ChatView from "./ChatView";
import { connect } from "react-redux";
import { setAdminEmployeeDataView } from "../redux-state-management/actionCreators";
import AdminViewEmployeeHolidays from "./AdminViewEmployeeHolidays";
import "./StaffManagement.css";

const StaffAdminDashboard = (props) => {
  let holidayList = [];
  let modifiers = {
    disabled: (date) => getDay(date) === 6, // Disables Saturdays
    holidays: (date) => getDate(date) === 2, // Highlights Tuesdays
    leaves: (date) => getDate(date) === 3,
  };
  return (
    <div className="adminDashboard">
      <div className="admin_staff">
        {StaffList.map((staffMember) => {
          return (
            <ListGroup.Item>
              <Button
                onClick={(e) => props.changeEmployeeData({ staffMember })}
              >
                {staffMember.employeeName}
              </Button>
            </ListGroup.Item>
          );
        })}
      </div>
      <ChatView className="chatView"></ChatView>
      <div className="attendanceView">
        <AdminViewEmployeeHolidays />
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
