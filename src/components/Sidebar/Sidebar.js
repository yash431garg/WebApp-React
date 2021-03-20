import React, { useContext } from "react";
import "../Header/Header.css";
import { AuthContext } from "../../containers/AuthContext";
import { Link } from "react-router-dom";
import "./Sidebar.css";
function Sidebar() {
  const { loginreducer } = useContext(AuthContext);
  const [state] = loginreducer;
  return (
    <div className="sidebar">
      <ul className="ul">
        {/* <li className="li_end">
          <Link to="/page">
            <i class="fas fa-user-circle"></i>
          </Link>
        </li> */}

        <li className="li_side">
          <Link to="/invoice">
            <i class="fas fa-file-invoice"></i>
            Invoice
          </Link>
        </li>
        <li className="li_side">
          <Link to="/inventory">
            <i class="fas fa-cart-arrow-down"></i>
            Inventory
          </Link>
        </li>
        <li className="li_finance">
          <Link to="/mainfinance">
            <i class="fas fa-wallet"></i>
            Finance
          </Link>
        </li>

        {/* <li className="li_side">
          <Link to="/invoicemanage">
            Invoice Mangement
            <i class="fas fa-file-invoice"></i>
          </Link>
        </li> */}
        <li className="li_side">
          <Link to="/staff">
            <i class="fas fa-users"></i>
            Staff
          </Link>
        </li>

        {/* <li className="li_side">
          <button
            id="logout"
            className={
              state.isUserLoggedin
                ? "btn btn-success !important"
                : "btn btn-danger !important"
            }
            type="button"
            onClick={() =>
              firebase
                .logout(state.isUserLoggedin)
                .then(() => window.location.assign("/"))
            }
          >
            log out
          </button>
        </li> */}
      </ul>
    </div>
  );
}

export default Sidebar;
