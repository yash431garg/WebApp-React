import React, { useEffect, useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import firebase from '../../containers/firebase';
import { LoginContext } from '../../containers/LoginContext';
import FormLogin from './FormLogin';
import RegisterMain from './RegisterMain';

const LoginMain = () => {
    const [db_uid, getUid] = useState('');
    const [db_phoneNumber, getDbphoneNumber] = useState('');
    //
    const [userMobileNum, setUserMobileNum] = useState('+919000900012');
    const [otp, setOtp] = useState('900012');
    const [displayMainForm, setDisplayMainForm] = useState('inherit');
    const [displayRegisterForm, setDisplayRegisterForm] = useState('none');
    const [displayOtpForm, setDisplayOtpForm] = useState('none');
    // const [validations, setValidations] = useState(false);

    const [isOldUser, setIsOldUser] = useState(false);
    const [isNewUser, setIsNewUser] = useState(false);
    //

    //otp form
    const OtpForm = ({ otp, displayOtpForm, onsubmit }) => {
        return (
            <>
                <Form autoComplete='off' style={{ display: displayOtpForm }} onSubmit={onsubmit} >
                    <Form.Group id='otp'>
                        <Form.Label>Enter OTP</Form.Label>
                        <Form.Control type='tel' name='otp' value={otp} onChange={(e) => setOtp(e.target.value)} required />
                        <span>enter '900012'</span>
                    </Form.Group>
                    <Button className='w-100 text-center mt-2' type='submit'>Login</Button>
                </Form>
            </>);
    };
    //end otp form


    const REGISTERED_USERS_DB = firebase.database().ref('TEST');

    // const window = {
    //     recaptchaVerifier: undefined
    // };

    useEffect(() => {
        console.group('Logged User ')
        console.log(db_uid);
        console.log(db_phoneNumber);
        console.groupEnd();

    }, [isOldUser, isNewUser, displayMainForm, db_phoneNumber, db_uid])


    const checkValidations = (e) => {
        e.preventDefault();
        if (userMobileNum && userMobileNum.length === 13) {
            checkIfExistingUser(userMobileNum);
        }
    }

    const checkIfExistingUser = (userMobileNum) => {
        REGISTERED_USERS_DB.get().then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach((childSnap) => {
                    const phn = childSnap.val().phone;
                    if (childSnap.exists() && phn.trim() !== userMobileNum.trim()) {
                        console.log(childSnap.val().phone)
                        setIsNewUser(true); //New User
                        setDisplayMainForm('none') // Hide Main Login Form
                        setDisplayRegisterForm('inherit'); // Show Register Form
                        console.log('New User!');
                        return
                    }
                    else {
                        setIsOldUser(true); // Old User
                        setDisplayOtpForm('inherit'); // show Otp Form
                        setDisplayMainForm('none'); // Hide Main Login Form and Registration Form
                        setDisplayRegisterForm('none');
                        console.log(userMobileNum + " old User");
                        // setValidations(true);
                        // LoginExistingUser(userMobileNum)
                        return
                    }
                })
            }
        }).catch((error) => {
            console.error(error);
        });
    };

    const LoginExistingUser = (userMobileNum) => {
        firebase.auth().settings.appVerificationDisabledForTesting = true;
        const phoneNumber = userMobileNum;
        const otp_code = otp;
        const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha_ref');
        firebase.auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                confirmationResult.confirm(otp_code)
                    .then((result) => {
                        if (result.user) { console.log(result.user) }
                        const uuid = result.user.uid;
                        const phone = result.user.phoneNumber;
                        getUid(uuid);
                        getDbphoneNumber(phone);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            });
    }

    // const RegisterNewUser = (userUid, userMobileNum) => {
    //     console.log(userUid);
    //     firebase.database().ref('REGISTERED_USERS').child(userUid).set({
    //         'uid': userUid,
    //         'phoneNumber': userMobileNum,
    //     })
    // }

    const viewDb = () => {
        // firebase.database().ref('REGISTERED_USERS').once('value', (snapshot) => {
        //     console.log(snapshot.val());
        // })

        const d = firebase.auth().currentUser;
        console.log(d);
    }


    const onSignInSubmit = (e) => {
        e.preventDefault();
        LoginExistingUser(userMobileNum);
        // checkValidations();
    }



    return (
        <>
            <Container className='d-flex justify-content-center' style={{ minHeight: '100vh' }}>
                <div className='w-100' style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body>
                            <h2 style={{ display: displayMainForm }} className='text-center mb-4'>Sign In</h2>
                            <LoginContext.Provider value={{
                                mainform: [displayMainForm, setDisplayMainForm],
                                registrationform: [displayRegisterForm, setDisplayRegisterForm],
                                mobile: [userMobileNum, setUserMobileNum],
                                validation: [checkValidations],
                                viewdb: [viewDb]
                            }}>
                                <FormLogin /> <br />
                                <OtpForm otp={otp} displayOtpForm={displayOtpForm} onsubmit={onSignInSubmit} />
                                <RegisterMain />
                            </LoginContext.Provider>

                        </Card.Body>

                    </Card>
                    <div className='w-100 text-center mt-2'>
                        Already Have an Account?  Log In
         </div>

                </div>
            </Container>
        </>
    )
}

export default LoginMain
