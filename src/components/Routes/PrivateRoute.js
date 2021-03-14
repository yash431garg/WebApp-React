import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../containers/AuthContext';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const { loginreducer } = useContext(AuthContext);
    const [state] = loginreducer;
    const { currentUser } = state;
    if (currentUser) {
        var showlogin = true;
    }
    console.log(showlogin);

    return (
        <>

            <Route {...rest} render={props => (
                showlogin ?
                    <Component {...props} />
                    : <Redirect to="/login" />
            )} />
        </>
    )
}

export default PrivateRoute
