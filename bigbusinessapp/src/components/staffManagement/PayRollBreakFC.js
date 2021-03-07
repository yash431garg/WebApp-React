import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import "./StaffManagement.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import store from "../redux-state-management/store";
import { setPayRollView } from "../redux-state-management/actionCreators";
const PayRollBreakFC = (props) => {
  //https://reactdatepicker.com/#example-month-picker

  const [selectedMonth, setSelectedMonth] = useState("1");
  const [selectedYear, setSelectedYear] = useState("2020");
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentView, setPaymentView] = useState(true);
  const [scroller, setScroller] = useState(false);
  const [paymentType, setPaymentType] = useState();
  const [showView, setShowView] = useState(props.PayrollView);
  const [empData, setEmpData] = useState(store.getState().employeeData);

  const pay = (paymentType) => {
    console.log(paymentType);
    setPaymentType(paymentType);
    paymentType === "advance" ? setScroller(true) : setScroller(false);
    setPaymentView(true);
  };
  return (
    <div
      className="payRollView"
      style={{
        display: props.payRollView ? "block" : "none",
        position: "absolute",
        right: "0",
        margin: "70px",
        top: "0",
      }}
    >
      <div>
        <div className="selectors">
          <DatePicker
            onChange={(date) => {
              setSelectedYear(date.getFullYear());
            }}
            showYearPicker
            dateFormat="yyyy"
          />
          <DatePicker
            dateFormat="MM"
            onChange={(date) => {
              setSelectedYear(date.getMonth() + 1);
            }}
            showMonthYearPicker
          />
        </div>
        <Button onClick={() => props.closePayRollView()}>Close View</Button>
      </div>
      <div>
        <p>Employee Name: {props.employeeName}</p>
        <p>PaySlip Month:{selectedMonth} </p>
        <p>Year: {selectedYear}</p>
        <p>Total Amount : {totalAmount}</p>
        <Button onClick={() => pay("advance")}>Pay Advance</Button>
        <Button onClick={() => pay("salary")}>Pay Salary</Button>
      </div>
      <Modal.Dialog
        className="paymentConfirmation"
        style={{ display: props.payRollView ? "block" : "none" }}
      >
        <Modal.Header closeButton onClick={() => props.closePayRollView()}>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Are you sure you want to pay {props.employeeName} {totalAmount} as{" "}
            {paymentType}{" "}
          </p>
          <input
            style={{ display: scroller ? "block" : "none" }}
            type="range"
            id="advSalary"
            min={totalAmount}
            max={3 * totalAmount}
            value={1.5 * totalAmount}
          ></input>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Yes</Button>
          <Button variant="primary" onClick={() => setPaymentView(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log({ ...state.payRollView });
  return { ...state.employeeData.employeeData, ...state.payRollView }; // state
};

const mapDispatchToProps = (dispatch) => ({
  closePayRollView() {
    console.log("Closing View");
    dispatch(setPayRollView(false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PayRollBreakFC);
