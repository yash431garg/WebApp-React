import { Card, Button } from "react-bootstrap";
import React, { Component } from "react";
import { connect } from "react-redux";

import {
  setEmployeeData,
  setPayRollView,
} from "../redux-state-management/actionCreators";
const StaffMemberCards = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Text>
          Name : {props.staffDetails.firstName} {props.staffDetails.lastName} <br />
          Phone Number : {props.staffDetails.mobileNumber}
        </Card.Text>
        <Button onClick={(e) => props.payrollBreakup(props.staffDetails)}>
          PayRoll BreakUp
        </Button>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => ({ employeeData: state.employeeData });
const mapDispatchToProps = (dispatch) => ({
  payrollBreakup(employeeData) {
    dispatch(setEmployeeData(employeeData));
    dispatch(setPayRollView(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StaffMemberCards);
