import React from "react";
import "../Header/Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
// import { TransactionsTable } from '../Finance/Tables/TransactionsTable';

//this func returns header and Transaction table as of now
function Header() {
  return (
    <header>
      <ul className="ul">
        <li className="li">
          <Link to="/">BigBusiness</Link>
        </li>
        <li className="li">
          <Link to="/mainfinance">Finance</Link>
        </li>
        <li className="li">
          <Link to="contact.asp">About</Link>
        </li>
        <li className="li">
          <Link to="/page">
            <AccountCircleIcon />
          </Link>
        </li>

        <li className="li_end">
          <a href="#remain">Reminders</a>
        </li>
        <li className="li_end">
          <a href="#due">Dues</a>
        </li>
      </ul>
      <br />
    </header>
  );
}

export default Header;
