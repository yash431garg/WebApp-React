import React, { Component } from 'react';
import { StaffList } from './StaffList';
import './StaffManagement.css';
import { StaffMemberCards } from './StaffMemberCards';
import { PayRollBreakView } from './PayRollBreakView';
export class StaffManagement extends Component {

    render() {
        return (
            <div className='container'>
                <div className='grid'>
                    {StaffList.map(staffMembers => {
                        return (<StaffMemberCards staffDetails={staffMembers} />)
                    })}
                </div>
                <div className="payrollBreakup" >
                    <PayRollBreakView staffDetails={StaffList[0]} />
                </div>
            </div>
        )
    }

}

