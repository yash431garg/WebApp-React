import React from 'react';
import '../Header/Header.css';
// import { TransactionsTable } from '../Finance/Tables/TransactionsTable';

//this func returns header and Transaction table as of now
function Header() {
    return (
        <header>
            <ul className="ul">
                <li className="li"><a href="/" title='Go to Home.'>BigBusiness</a></li>
                <li className="li"><a href="/mainfinance" title='Go to Finance Page.'>Finance</a></li>
                <li className="li"><a href="/about" title='Go to About!'>About</a></li>
                <li className="li"><a href="/login" title='Login'>Login</a></li>
                {/* <li className="li"><a href="/register" title='Login'>Register</a></li> */}

            </ul>
            <br />
        </header>
    )
}

export default Header;