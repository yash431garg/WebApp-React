import React, { Component } from "react";
import './StaffManagement.css';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates';
import { getDay, getDate,getMonth } from 'date-fns';
import { Card, Table } from 'react-bootstrap';



const AdminViewEmployeeHolidays = (props) => {
    const leaveList = ["10-02-2021"];

    let modifiers = {
        disabled: date => getDay(date) === 6, // Disables Saturdays
        holidays: date => holiday(date), // Highlights Tuesdays
        leaves: date => getDate(date) === 3
    }

    function holiday(date) {
        leaveList.map((leaveDay) => {
            let cond =  getDate(date) === parseInt(leaveDay.split("-")[0]) && getMonth(date) === parseInt(leaveDay.split("-")[1])-1;
            if(cond)
                console.log(date);
            return cond;
        });
    }
    let modifiersClassNames = {
        holidays: '-holidays',
        leaves: 'leaves'
    }
    return (
        <div>
            <DateRangePickerCalendar className='attendanceCalender' modifiers={modifiers}
                modifiersClassNames={modifiersClassNames}
                startDate={new Date()}
                endDate={new Date()} />
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