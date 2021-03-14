import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Remainder.css";
// import remainderIcon from "../../../assets/remainderIcon.svg";

const Reminder = ({ redata, onDelete }) => {
  return (
    <div className="remainder_main">
      <div className="remainder_table">
        <h3>Reminders List: </h3>
        <p>{redata.id}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {redata.map((task, index) => (
            <div
              key={index}
              style={{
                padding: "30px",
                border: "2px solid black",
                width: "fit-content",
                boxSizing: "border-box",
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
              <p style={{ width: "100px" }}>Date :{task.reminderDate}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <img className="remainder_icon" src={remainderIcon}></img> */}
    </div>
  );
};

export default Reminder;
