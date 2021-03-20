import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../containers/AuthContext';
import firebase from '../../containers/Firebase';



var cu_firstName;
var cu_lastName;
var cu_businessName;
var cu_emailID;
var cu_businessType;
var cu_mobileNumber;
var ud = false;


const Dashboard = () => {
    const { loginreducer } = useContext(AuthContext);
    const [state] = loginreducer;
    const { currentUser } = state;

    const [rerender,setRerender] = useState(false);

    useEffect(() => {
        if (rerender === true) {
            console.log('re-rendered :' ,rerender)
        }

    }, [rerender])

    if (currentUser) {
        var usermeta = currentUser.providerData[0];
        var id = currentUser.uid;
        let userdatafound = false;
        var cudata = [];

        firebase.database.ref('Users').once('value', (snap) => {
            const dbdata = snap.val();
            const cc = '+91';
            for (let i in dbdata) {
                const dbphone = cc.concat(dbdata[i].profile.mobileNumber);
                if (currentUser.phoneNumber && dbphone === currentUser.phoneNumber) {
                    console.log(dbdata[i].profile);
                    userdatafound = true;
                }
                if (userdatafound === true) {
                    cudata.push(dbdata[i].profile);
                    const cu = cudata[0];
                    cu_firstName = cu.firstName;
                    cu_lastName = cu.lastName;
                    cu_businessName = cu.businessName;
                    cu_emailID = cu.emailId;
                    cu_businessType = cu.businessType;
                    cu_mobileNumber = cu.mobileNumber;
                }

            }
            if (cudata !== null) {
                ud = true;
                setRerender(true);
            }
        })
    }

    console.log(cudata)

    return (
        <>
            {currentUser ? (<h1>Welcome {currentUser.phoneNumber}</h1>) : (<h2>No User Logged In..!</h2>)}
            {currentUser ? (<pre>User UID : {id}</pre>) : (<div></div>)}
            {currentUser ? (<div><span>AUTH metadata : </span> <pre>{JSON.stringify(usermeta)}</pre></div>) : (<div></div>)}

            <hr/>


            <div>Data from RTDB:</div>

            {ud ? (<h6>firstName : <code>{cu_firstName}</code></h6>) : (<div></div>)}
            {ud ? (<h6>lastName : <code>{cu_lastName}</code></h6>) : (<div></div>)}
            {ud ? (<h6>Business Name : <code>{cu_businessName}</code></h6>) : (<div></div>)}
            {ud ? (<h6>Email : <code>{cu_emailID}</code></h6>) : (<div></div>)}
            {ud ? (<h6>Business Type : <code>{cu_businessType}</code></h6>) : (<div></div>)}
            {ud ? (<h6>Phone : <code>{cu_mobileNumber}</code></h6>) : (<div></div>)}


        </>
    )
}

export default Dashboard
