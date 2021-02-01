import React, { Component } from 'react';
import { getDay, getDate } from 'date-fns';
import { ListGroup } from 'react-bootstrap';
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import { StaffList } from './StaffList';
import { ChatView } from './ChatView';

export class StaffAdminDashboard extends Component {

    modifiers = {
        disabled: date => getDay(date) === 6, // Disables Saturdays
        highlight: date => getDay(date) === 2 // Highlights Tuesdays
    }
    //<DateRangePickerCalendar modifiers={this.modifiers}/>
    render() {
        return (
            <div>
                <div className='adminDashboard'>
                    <ListGroup>
                        {StaffList.map(staffMember => { return <ListGroup.Item>{staffMember.employeeName}</ListGroup.Item> })}
                    </ListGroup>
                    <ChatView className='chatView' empDetails={StaffList[0].employeeName}></ChatView>
                    <div className='attendanceView'>
                    <DateRangePickerCalendar className='attendanceCalender' modifiers={this.modifiers}/>
                    <div>
                        <p>Total No. of Leaves :</p>
                        <p> Number of leaves availed</p>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}