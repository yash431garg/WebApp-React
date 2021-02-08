import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import './StaffManagement.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const PayRollBreakFC = (props) => {
    //https://reactdatepicker.com/#example-month-picker

    const [selectedMonth, setSelectedMonth] = useState("1");
    const [selectedYear, setSelectedYear] = useState("2020");
    const [totalAmount, setTotalAmount] = useState(0);
    const [paymentView, setPaymentView] = useState(false);
    const [scroller, setScroller] = useState(false);
    const [paymentType, setPaymentType] = useState();
    const [showView, setShowView] = useState(props.PayrollView);
    React.useEffect(() => {
        setShowView(props.PayrollView);
    }, [props.PayrollView]);

    const pay = (paymentType) => {
        console.log(paymentType);
        setPaymentType(paymentType);
        paymentType === 'advance' ? setScroller(true) : setScroller(false);
        setPaymentView(true);
    }
    return (
        <div className='payRollView' style={{ display: showView ? 'block' : 'none' }}>
            <div>
            <div className='selectors'>
                <DatePicker
                    onChange={(date) => { setSelectedYear(date.getFullYear());  }}
                    showYearPicker
                    dateFormat="yyyy"
                />
                <DatePicker
                    dateFormat="MM"
                    onChange={(date) => { setSelectedYear(date.getMonth()+1) }}
                    showMonthYearPicker
                />
            </div>
            <Button onClick={() => setShowView(false)}>Close View</Button>
            </div>
            <div>
                <p>Employee Name: {props.staffDetails.employeeName}</p>
                <p>PaySlip Month:{selectedMonth} </p>
                <p>Year: {selectedYear}</p>
                <p>Total Amount : {totalAmount}</p>
                <Button onClick={() => pay('advance')}>Pay Advance</Button>
                <Button onClick={() => pay('salary')}>Pay Salary</Button>
            </div>
            <Modal.Dialog className="paymentConfirmation" style={{ display: paymentView ? 'block' : 'none' }}>
                <Modal.Header closeButton onClick={() => setPaymentView(false)}>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure you want to pay {props.staffDetails.employeeName} {totalAmount} as {paymentType} </p>
                    <input style={{ display: scroller ? 'block' : 'none' }} type="range" id='advSalary' min={totalAmount} max={3 * totalAmount} value={1.5 * totalAmount}></input>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Yes</Button>
                    <Button variant="primary" onClick={() => setPaymentView(false)}>No</Button>
                </Modal.Footer>
            </Modal.Dialog>

        </div>
    )
}


const mapStateToProps = state => ({ employeeData: state.employeeData });

export default connect(mapStateToProps)(PayRollBreakFC);
