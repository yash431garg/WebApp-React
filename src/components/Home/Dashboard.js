import React, { useContext } from 'react';
import { AuthContext } from '../../containers/AuthContext';
import firebase from '../../containers/Firebase';

var cu_uname;
var cu_bname;
var cu_email;
var cu_btype;
var cu_city;
var cu_phn;
var ud = false;


const Dashboard = () => {
    const { loginreducer } = useContext(AuthContext);
    const [state] = loginreducer;
    const { currentUser } = state;

    if (currentUser) {
        var usermeta = currentUser.providerData[0];
        var id = currentUser.uid;

        firebase.database.ref('Users').child('/uid1/profile')
            .once('value', (snap) => {
                console.log(snap.val());
                ud = true;
                const cu = snap.val();
                cu_uname = cu.firstName;
                cu_bname = cu.businessName;
                cu_email = cu.emailId;
                cu_btype = cu.businessType;
                cu_phn = cu.mobileNumber;
                // console.log('snap.val()', cu.bname);
            })
    }
    
    return (
        <>
            {currentUser ? (<h1>Welcome {currentUser.phoneNumber}</h1>) : (<h2>No User Logged In..!</h2>)}
            {currentUser ? (<pre>User UID : {id}</pre>) : (<div></div>)}
            {currentUser ? (<div><span>AUTH metadata : </span> <pre>{JSON.stringify(usermeta)}</pre></div>) : (<div></div>)}


            <pre>Data from RTDB:</pre>

            {ud ? (<pre>UserName : {cu_uname}</pre>) : (<div></div>)}
            {ud ? (<pre>Business Name : {cu_bname}</pre>) : (<div></div>)}
            {ud ? (<pre>Email : {cu_email}</pre>) : (<div></div>)}
            {ud ? (<pre>Business Type : {cu_btype}</pre>) : (<div></div>)}
            {ud ? (<pre>City : {cu_city}</pre>) : (<div></div>)}
            {ud ? (<pre>Phone : {cu_phn}</pre>) : (<div></div>)}


        </>
    )
}

export default Dashboard
