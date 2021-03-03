import React, { useContext } from 'react';
// import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Transaction from '../containers/Transaction';
// import Header from './Header/Header';
import NotFound from './NotFound';
// import TransactionsTable from '../components/Finance/Tables/TransactionsTable';
import MainFinance from './Finance/MainFinance';
import RegisterMain from './Login/RegisterMain';
import LoginMain from './Login/LoginMain';
import { AuthContext } from '../containers/AuthContext';
import Dashboard from './Home/Dashboard';


// import index from '../App';

// this function routes through different components by checking urlpath.
function Routes() {
    const { loginreducer } = useContext(AuthContext);
    const [state] = loginreducer;
    console.log(state)
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/MainFinance' component={MainFinance} />
            <Route exact path='/register' component={RegisterMain} />
            <Route exact path='/login' component={LoginMain} />
            <Route path='*' component={NotFound} />
        </Switch>
    )
}

export default Routes