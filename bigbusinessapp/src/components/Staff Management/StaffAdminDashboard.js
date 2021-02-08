import React, { Component } from 'react';
import { getDay, getDate } from 'date-fns';
import { ListGroup } from 'react-bootstrap';
import { Card,Table } from 'react-bootstrap';
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import { StaffList } from './StaffList';
import { ChatView } from './ChatView';

export class StaffAdminDashboard extends Component {
    holidayList = [];
    modifiers = {
        disabled: date => getDay(date) === 6, // Disables Saturdays
        holidays: date => getDate(date) === 2, // Highlights Tuesdays
        leaves: date => getDate(date) === 3
    }
    modifiersClassNames = {
        holidays: 'holidays',
        leaves: 'leaves'
    }

    render() {
        return (
            <div>
                <div className='adminDashboard'>
                    <ListGroup>
                        {StaffList.map(staffMember => { return <ListGroup.Item>{staffMember.employeeName}</ListGroup.Item> })}
                    </ListGroup>
                    <ChatView className='chatView' empDetails={StaffList[0].employeeName}></ChatView>
                    <div className='attendanceView'>
                        <DateRangePickerCalendar className='attendanceCalender' modifiers={this.modifiers} modifiersClassNames={this.modifiersClassNames} />
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
                </div>
            </div>
        );
    }
}