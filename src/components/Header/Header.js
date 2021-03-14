import React, { useContext } from "react";
import "../Header/Header.css";
import firebase from '../../containers/Firebase';
import { AuthContext } from '../../containers/AuthContext';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
// import { Link } from "react-scroll";
// import { TransactionsTable } from '../Finance/Tables/TransactionsTable';
//this func returns header and Transaction table as of now
function Header() {
  const { loginreducer } = useContext(AuthContext)
  const [state] = loginreducer;
  return (
    <header>
      <ul className="ul">
        <li className="li">
          <Link to="/">
            <img className="li_img" src={logo} alt='li_img'></img>
          </Link>
          <h5>BigBusiness</h5>
        </li>

        <li className="li" style={{ marginLeft: '42%', paddingTop: '20px', marginRight: '0' }}><><button id='logout' className={state.isUserLoggedin ? ('btn btn-success !important') : ('btn btn-danger !important')} type="button" onClick={() => firebase.logout(state.isUserLoggedin).then(() => window.location.assign('/'))}>log out</button></></li>


        <li className="li_end">
          <Link to="/page">
            <i class="fas fa-user-circle"></i>
          </Link>
        </li>
        <li className="li_end">
          <Link to="/staff">
            <i class="fas fa-users"></i>
          </Link>
        </li>
        <li className="li_finance">
          <Link to="/mainfinance">
            <i class="fas fa-wallet"></i>
          </Link>
        </li>
        <li className="li_end">
          <Link to="/about">
            <i class="fas fa-info"></i>
          </Link>
          <p>About</p>
        </li>
        <li className="li_end">
          <Link to="/blogs">
            <i class="fas fa-blog"></i>
          </Link>
          <p>Blogs</p>
        </li>
        <li className="li_end">
          <Link to="/invoice">
            <i class="fas fa-file-invoice"></i>
          </Link>
          <p>Invoice</p>
        </li>
        <li className="li_end">
          <Link to="/invoicemanage">
            <i class="fas fa-file-invoice"></i>
          </Link>
          <p>Invoice</p>
        </li>
        <li className="li_end">
          <Link to="/inventory">
            <i class="fas fa-cart-arrow-down"></i>
          </Link>
          <p>Inventory</p>
        </li>
      </ul>
    </header>
  );
}

export default Header;
