import { Card, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './StaffManagement.css';
import {setEmployeeData} from '../redux-state-management/actionCreators';
const StaffMemberCards = props => {
    return (
        <Card >
            <Card.Img variant="top" src='' alt="None" />
            <Card.Body>
                <Card.Text>
                    Name : {props.staffDetails.employeeName} <br />
                        Phone Number : {props.staffDetails.employeePhoneNumber}
                </Card.Text>
                <Button onClick={e => props.payrollBreakup(props.staffDetails)} >PayRoll BreakUp</Button>
            </Card.Body>
        </Card>
    )
}

const mapStateToProps = state => ({ employeeData: state.employeeData });
const mapDispatchToProps = (dispatch) => ({
    payrollBreakup(employeeData) {
      dispatch(setEmployeeData(employeeData));
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(StaffMemberCards);
