import React from "react";
import { connect } from 'react-redux';

import { Button, Modal } from 'react-bootstrap';
import './StaffManagement.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const PayRollBreakView = props => {
    //https://reactdatepicker.com/#example-month-picker
    return (
        <div>
            <div className='selectors'>
                <p>Calender</p>
            </div>
            <div>
                <p>Employee Name: {this.props.staffDetails.employeeName}</p>
                <p>PaySlip Month:{this.state.selectedMonth} </p>
                <p>Year: {this.state.selectedYear}</p>
                <p>Total Amount : {this.state.totalAmount}</p>
                <Button onClick={e => this.payAdvane()}>Pay Advance</Button>
                <Button onClick={e => this.paySalary()}>Pay Salary</Button>
            </div>
            <Modal.Dialog className="paymentConfirmation">
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure you want to pay {this.props.staffDetails.employeeName} {this.state.totalAmount}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Yes</Button>
                    <Button variant="primary">No</Button>
                </Modal.Footer>
            </Modal.Dialog>
            <input type="range" id='advSalary' min={this.state.totalAmount} max={3 * this.state.totalAmount} value={1.5 * this.state.totalAmount}></input>
        </div>
    )
}

const mapStateToProps = state => ({
    empDetails: state.empDetails
});

export default connect(mapStateToProps)(PayRollBreakView);
