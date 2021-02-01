import React, { Component } from "react";
import { Button, Modal } from 'react-bootstrap';
import './StaffManagement.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export class PayRollBreakView extends Component {
    //https://reactdatepicker.com/#example-month-picker

    constructor(props) {
        super(props);
        // Set initial state (ONLY ALLOWED IN CONSTRUCTOR)
        this.state = {
            selectedMonth: new Date().getMonth() + 1,
            selectedYear: new Date().getFullYear(),
            totalAmount: 100,
            incentives: []
        };
    }
    setMonth(month) {
        this.setState({ selectedMonth: month });
    }
    setYear(year) {
        this.setState({ selectedYear: year });

    }
    payAdvane() {
        console.log('Pay Advance');
    }
    paySalary() {
        console.log('Pay Salary');
    }
    render() {
        let newDate = new Date();
        let year = newDate.getFullYear();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let startDate = new Date(month + "-" + date + "-" + (year - 10));
        return (
            <div>
                <div className='selectors'>
                    <DatePicker
                        selected={newDate}
                        onChange={selectedMonth => this.setMonth(selectedMonth)}
                        endDate={this.currDate}
                        startDate={startDate}
                        showYearPicker
                        dateFormat="yyyy"
                    />
                    <DatePicker
                        dateFormat="MM"
                        onChange={selectedYear => this.setYear(selectedYear)}
                        selected={month}
                        showMonthYearPicker
                    />
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
}