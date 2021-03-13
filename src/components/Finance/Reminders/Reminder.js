import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Remainder.css";

const Reminder = ({ redata, onDelete }) => {
  return (
    <div className="remainder">
      <h3>Reminders List: </h3>
      <p>{redata.id}</p>
      {redata.map((task, index) => (
        <div
          key={index}
          style={{
            marginLeft: "2px",
            border: "1px groove cyan",
            width: "fit-content",
          }}
        >
          <h5>
            Name :{task.title}
            <span style={{ marginLeft: "20px" }}>
              <FaTimes
                style={{ color: true ? "red" : "default" }}
                onClick={() => onDelete(task.id)}
                title="Delete this Task?"
              />
            </span>
          </h5>
          <p>Amount :{task.amount} </p>
          <p>Date :{task.reminderDate}</p>
        </div>
      ))}
    </div>
  );
};

export default Reminder;
