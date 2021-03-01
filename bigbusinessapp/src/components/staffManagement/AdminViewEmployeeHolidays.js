import React, { useState } from "react";
import { connect } from 'react-redux';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { getDay, getDate, getMonth } from 'date-fns';
import { Card, Table } from 'react-bootstrap';
import './StaffManagement.css';


const AdminViewEmployeeHolidays = (props) => {
    const [leaveList, setLeaveList] = useState([10, 1, 5, 6]);

    let modifiers = {
        disabled: date => getDay(date) === 6,
        leaves: date => getDate(date) === 3,
    }
    let holidays = [new Date(2021, 2, 12), new Date(2021, 2, 14)];
    console.log(modifiers);
    let modifiersClassNames = {
        holidays: '-holidays',
        leaves: 'leaves'
    }
    function updateLaves(e) {
        getMonth(e);
        console.log(getMonth(e));
    }
    return (
        <div>
            <DayPicker className='attendanceCalender' modifiers={modifiers} modifiersClassNames={modifiersClassNames} selectedDays={holidays} onMonthChange={e => updateLaves(e)} />
            <div>
                <Card >
                    <Card.Header>Leave Request History  <p>Remaining Leaves : </p></Card.Header>
                    <Card.Body>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Date <th>From</th><th>To</th></th>
                                    <th>Time <th>From</th><th>To</th></th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> <td>21-01-2021</td><td>22-01-2021</td></td>
                                    <td> <td>9:00AM</td><td>6:00PM</td></td>
                                    <th>Status</th>
                                </tr>

                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    let x1 = { ...state.adminEmployeeDataView.adminEmployeeDataView };
    return x1.staffMember; // state
}

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AdminViewEmployeeHolidays);