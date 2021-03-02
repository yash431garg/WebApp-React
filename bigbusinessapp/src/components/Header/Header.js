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
                <li className="li"><a href="/invoice" title='Go to INVOICE GENERATION Page.'>Invoice</a></li>
                <li className="li"><a href="/manageinvoice" title='Go to INVOICE MANAGEMENT Page. Manage your generated invoices here.'>Manage Invoice</a></li>
                <li className="li"><a href="contact.asp" title='Go to About!'>About</a></li>
            </ul>
            <br />
        </header>
    )
}

export default Header;