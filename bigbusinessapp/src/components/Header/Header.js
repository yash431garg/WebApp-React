import React from 'react';
import '../Header/Header.css';
import firebase from '../../containers/firebase';

//this func returns header and Transaction table as of now
function Header() {
    return (
        <header>
            <ul className="ul">
                <li className="li"><a href="/" title='Go to Home.'>BigBusiness</a></li>
                <li className="li"><a href="/mainfinance" title='Go to Finance Page.'>Finance</a></li>
                <li className="li"><a href="/about" title='Go to About!'>About</a></li>
                <li className="li"><a href="/login" title='Login'>Login</a></li>
                <li className="li"><button type="button" onClick={()=>firebase.logout()}>log out</button></li>

            </ul>
            <br />
        </header >
    )
}

export default Header;