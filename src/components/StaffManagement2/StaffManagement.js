import React from "react";
import car from "./person.jpg";
import "./StaffManagement.css";

const StaffManagement2 = () => {
  return (
    <div>
      StaffManagement
      {/* Employee List, Chat box and Payroll Container */}
      <div id="div_container">
        <div id="image_list_container">
          <div id="emp_image_container">
            <img className="emp_image" src={car} alt="A person's image" />
            <span>{"Employee Name"}</span>
            <span>{"(post)"}</span>
          </div>
          <div id="emp_list_container">
            <span id="active_conv_title">
              Active Conversations
              <span className="no_of_emp">5</span>
            </span>
            <ul>
              <li className="emp_item selected">
                <img src={car} alt="Employee Image" className="emp_image" />
                {"Employee Name"}
              </li>
              <li className="emp_item">
                <img src={car} alt="Employee Image" className="emp_image" />
                {"Employee Name"}
              </li>
              <li className="emp_item">
                <img src={car} alt="Employee Image" className="emp_image" />
                {"Employee Name"}
              </li>
              <li className="emp_item">
                <img src={car} alt="Employee Image" className="emp_image" />
                {"Employee Name"}
              </li>
              <li className="emp_item">
                <img src={car} alt="Employee Image" className="emp_image" />
                {"Employee Name"}
              </li>
            </ul>
            <span id="archive_chats_title">
              Archive Chats
              <span className="no_of_emp">2</span>
            </span>
          </div>
        </div>
        <div id="chat_container"></div>
        <div id="payroll_container">
          <div id="calendar_container"></div>
          <div id="leave_history_container"></div>
        </div>
      </div>
    </div>
  );
};

export default StaffManagement2;
