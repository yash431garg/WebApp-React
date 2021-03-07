import React, { Component } from "react";
import "./StaffManagement.css";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";

const ChatView = (props) => {
  return (
    <div className="chatView" style={{ width: "42vw" }}>
      <div className="textBoxView">
        <input id="send" type="text" />
        <p>{props.employeeName}</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  let x1 = { ...state.adminEmployeeDataView.adminEmployeeDataView };
  console.log(x1.staffMember);
  return x1.staffMember; // state
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ChatView);
