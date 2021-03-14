import React from "react";
import "./Feature.css";
import invoiceIcon from "../../assets/invoiceIcon.svg";
import Img1 from "../../assets/img1.svg";
import staffIcon from "../../assets/staffIcon.svg";
import inventoryIcon from "../../assets/inventoryIcon.svg";
import financeIcon from "../../assets/financeIcon.svg";
import rightLeaves from "../../assets/rightLeaves.svg";
import leftLeaves from "../../assets/leftLeaves.svg";

function Feature() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Features</h1>
      <img className="left_leave_home" src={leftLeaves}></img>
      <div className="invoice">
        <img src={invoiceIcon}></img>
        <div className="invoice_data">
          <h2>Invoice</h2>
          <p>
            Generation of inward and outward invoices in simple clicks, track
            income-expense transactions, financial reports, and forecasting on a
            single dashboard.
          </p>
        </div>
      </div>

      <div className="inventory">
        <div className="inventory_data">
          <h2>Inventory</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Cssical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
        <img src={inventoryIcon}></img>
      </div>

      <div className="finance">
        <img src={financeIcon}></img>
        <div className="finance_data">
          <h2>Finance</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Cssical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
        <img className="right_leave" src={rightLeaves}></img>
      </div>

      <div className="staff">
        <div className="staff_data">
          <h2>Staff Mangement</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Cssical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
        <img src={staffIcon}></img>
      </div>
    </div>
  );
}
export default Feature;
