import { Card, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import './StaffManagement.css';

export class StaffMemberCards extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    payrollBreakup(employeeId) {
        console.log("Payroll Breakup for " + employeeId);

    }
    render() {
        var empId = this.props.staffDetails.employeeId;
        return (
            <Card >
                <Card.Img variant="top" src='' alt="None" />
                <Card.Body>
                    <Card.Text>
                        Name : {this.props.staffDetails.employeeName} <br />
                        Phone Number : {this.props.staffDetails.employeePhoneNumber}
                    </Card.Text>
                    <Button onClick={e => this.payrollBreakup(empId)}>PayRoll BreakUp</Button>
                </Card.Body>
            </Card>
        )
    }
}