import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { StaffList } from './StaffList';
import './StaffManagement.css';
import PayRollBreakFC from './PayRollBreakFC';
import { connect } from 'react-redux';

const StaffManagement = () => {
    const [employeeData, setEmployeeData] = useState({
        employeeId: 12149,
        employeeName: "Akhil",
        employeePhoneNumber: "9515748468",
        employeeSalaryStatus: "Working",
        employeeDesignation: "String"
    });
    const [showPayrollView, setShowPayrollView] = useState(false);
    function payrollBreakup(staffMembers) {
        setShowPayrollView(true);
        setEmployeeData(staffMembers);
        console.log(showPayrollView);
    }

    return (
        <div className='container'>
            <div className='grid' style={{ width: showPayrollView ? '40vw' : '95vw' }}>
                {StaffList.map(staffMembers => {
                    return (
                        <Card >
                            <Card.Img variant="top" src='' alt="None" />
                            <Card.Body>
                                <Card.Text>
                                    Name : {staffMembers.employeeName} <br />
                                Phone Number : {staffMembers.employeePhoneNumber}
                                </Card.Text>
                                <Button onClick={() => payrollBreakup(staffMembers)} >PayRoll BreakUp</Button>
                            </Card.Body>
                        </Card>)
                })}
            </div>
            <div className="payrollBreakup" >
                <PayRollBreakFC staffDetails={employeeData} PayrollView={showPayrollView} />
            </div>
        </div>
    )

}



const mapStateToProps = state => ({ employeeData: state.employeeData });

export default connect(mapStateToProps)(StaffManagement);
