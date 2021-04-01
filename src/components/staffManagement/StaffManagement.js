import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import firebase from "../../containers/Firebase";
import store from "../redux-state-management/store";
import PayRollBreakFC from "./PayRollBreakFC";
import StaffMemberCards from "./StaffMemberCards";

const StaffManagement = () => {
  const [employeeData, setEmployeeData] = useState();
  const [showPayrollView, setShowPayrollView] = useState(false);
  const [employeesData, setEmployeesData] = useState([]);
  useEffect(() => {
    firebase.database
      .ref("Users/uid1")
      .child("staffDetails")
      .on("value", function (snapshot) {
        let json = snapshot.val();
        let keys = Object.keys(json);
        let vals = Object.values(json);
        for (let i = 0; i < keys.length; i++) {
          vals[i].id = keys[i];
        }
        setEmployeesData(vals);
      });
  }, []);
  return (
    <div className="container">
      <div
        className="container_cards"
        style={{
          width: showPayrollView ? "40vw" : "95vw",
          display: "flex",
          padding: "20px",
          justifyContent: "space-between",
        }}
        onClick={() => {
          document.getElementsByClassName("container_cards")[0].style.display =
            "block";
          document.getElementsByClassName("container_cards")[0].style.width =
            "fit-content";
        }}
      >
        {employeesData.map((staffMembers) => {
          return <StaffMemberCards staffDetails={staffMembers} />;
        })}
      </div>
      <div className="payrollBreakup">
        <PayRollBreakFC
          PayrollView={showPayrollView}
          onChange={(e) => setEmployeeData(store.getState().employeeData)}
          {...employeeData}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ employeeData: state.employeeData });

export default connect(mapStateToProps)(StaffManagement);

//
