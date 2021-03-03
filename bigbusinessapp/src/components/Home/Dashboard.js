import React, { useContext } from 'react';
import { AuthContext } from '../../containers/AuthContext';

const Dashboard = () => {
    const { loginreducer } = useContext(AuthContext);
    const [state] = loginreducer;
    console.log(state)
    return (
        <>
            <h1>Welcome {state.UserPhoneNumber }</h1>
        </>
    )
}

export default Dashboard
