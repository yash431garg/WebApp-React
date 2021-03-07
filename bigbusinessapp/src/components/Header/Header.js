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
        <li className="li_finance">
          <Link to="/mainfinance">Finance</Link>
          <a className="li_finance_r" href="#remainder">
            Remainder
          </a>
          <a className="li_finance_d" href="#due">
            Dues
          </a>
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
          <Link to="/inventory">
            <i class="fas fa-file-invoice"></i>
          </Link>
          <p>inventory</p>
        </li>
        <li className="li_end">
          <Link to="/invoice">
            <i class="fas fa-cart-arrow-down"></i>
          </Link>
          <p>invoice</p>
        </li>
        <li className="li_end">
          <Link to="/blogs">
            <i class="fas fa-blog"></i>
          </Link>
          <p>blogs</p>
        </li>
        <li className="li_end"></li>
        <li className="li_end"></li>
      </ul>
      <br />
    </header>
  );
}

export default Header;
