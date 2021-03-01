import React, { useState,useReducer } from 'react';
import { StaffList } from './StaffList';
import './StaffManagement.css';
import PayRollBreakFC from './PayRollBreakFC';
import { connect } from 'react-redux';
import StaffMemberCards from './StaffMemberCards';
import store from '../redux-state-management/store';

const StaffManagement = () => {
    const [employeeData, setEmployeeData] = useState(store.getState().employeeData,{
        employeeName: 'Aryan',
        employeeId: '0X1DSA',
        employeePhoneNumber: '957412544',
        employeeSalaryStatus: 'Not Paid',
        employeeDesignation: 'Leader'
    });
    const [showPayrollView, setShowPayrollView] = useState(false);
    return (
        <div className='container'>
            <div className='grid' style={{ width: showPayrollView ? '40vw' : '95vw' }}>
                {StaffList.map(staffMembers => {
                    return (<StaffMemberCards staffDetails={staffMembers} />)
                })}
            </div>
            <div className="payrollBreakup" >
                <PayRollBreakFC PayrollView={showPayrollView} onChange = {e=> setEmployeeData(store.getState().employeeData)} {...employeeData}/>
            </div>
        </div>
    )

}



const mapStateToProps = state => ({ employeeData : state.employeeData });

export default connect(mapStateToProps)(StaffManagement);
