import React, { Component } from "react";
import './StaffManagement.css';
import "react-datepicker/dist/react-datepicker.css";

export class ChatView extends Component {
    render() {
        return (
            <div className='chatView'>
                <div className='textBoxView'>
                    <input id='send' type='text' />
                </div>
            </div>
        );
    }
}