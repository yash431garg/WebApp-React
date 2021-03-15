import React, { createContext, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router';
import firebase from '../containers/Firebase';

//Auth Context
export const AuthContext = createContext();



const reducer = (state, action) => {
    switch (action.type) {

        case 'loginformdata': {
            return { ...state, [action.field]: action.value }
        }
        case 'otpformdata': {
            return { ...state, [action.field]: action.value }
        }
        case 'CHECK_IF_USER_ALREADY_REGISTERED': {
            console.table('data from dispatch', action.value);
            return { ...state, data: action.value }
        }
        case 'IF_OLD_USER': {
            return {
                ...state,
                isOldUser: true,
                isNewUser: false,
                showLoginForm: false,
                showOtpForm: true
            }
        }
        case 'IF_NEW_USER': {
            return {
                ...state,
                isOldUser: false,
                isNewUser: true,
                showLoginForm: false,
                showOtpForm: false,
                showRegistrationForm: true
            }
        }

        case 'AUTH_AND_ASSIGN_USER': {
            console.group("AUTH AND ASSIGN");
            console.log('auth : ', action.payload)
            console.groupEnd();
            return {
                ...state,
                user: action.payload,
                isUserLoggedin: true
            }
        }

        case 'onregister': {
            console.groupEnd('ON USER REGISTER');
            console.log('onregister : ', action.type)
            console.log('onregister : ', action.payload)
            console.groupEnd();
            const countryCode = '+91';
            const phonecc = countryCode.concat(state.UserPhoneNumber);
            firebase.database.ref('NEWTEST').child(state.UserPhoneNumber).set(action.payload);
            firebase.database.ref('TEST').child(phonecc).set(action.payload);
            return {
                ...state,
                newuserdata: action.payload,
                showRegistrationForm: false,
                showOtpForm: true
            }
        }
        case 'USER_SIGNED_IN': {
            console.group('CURRENT USER CHECK');
            console.log('currentUser : ', action.type)
            console.log('currentUser : ', action.payload)
            console.groupEnd();
            return {
                ...state,
                isUserLoggedin: true,
                currentUser: action.payload
            }
        }
        case 'newuserregistersuccess': {
            console.group('newuserregistersuccess');
            console.log('newuserregistersuccess : ', action.type)
            console.log('newuserregistersuccess : ', action.payload)
            console.groupEnd();
            return {
                ...state,
                isUserLoggedin: true,
                showRegistrationForm: false,
                showOtpForm: false
            }
        }

        case 'loginsuccess': {
            return {
                ...state,
                loginsuccess: true
            }
        }
        default:
            break;
    }
    return state;
}

const initialState = {
    UserPhoneNumber: '',
    otp: '',
    showLoginForm: true,
    showOtpForm: false,
    showRegistrationForm: false,
    isUserLoggedin: false,
    isUser: false,
    isNewUser: false,
    isOldUser: false,
    data: [],
    error: '',
    fetchDB: false,
    user: '',
    newuserdata: '',
    currentUser: null,
    loginsuccess: false,
}

const AuthContextProvider = (props) => {

    const ACTIONS = {
        initialLogin: 'CHECK_IF_USER_ALREADY_REGISTERED',
        userisOld: 'IF_OLD_USER',
        userisNew: 'IF_NEW_USER',
        user: 'AUTH_AND_ASSIGN_USER',
        currentuser: 'USER_SIGNED_IN'
    }

    // reducer
    const [state, dispatch] = useReducer(reducer, initialState);
    // reducer
    const history = useHistory();
    //
    const { UserPhoneNumber,
        otp,
        // showLoginForm,
        // showOtpForm,
        // showRegistrationForm,
        // isUserLoggedin,
        // isUser,
        // isNewUser,
        // isOldUser,
        data,
        // fetchDB,
        // user,
        // newuserdata,
        currentUser } = state;
    //
    //
    useEffect(() => {
        console.log(otp)
        async function fetchDB() {
            try {
                await firebase.database.ref('Users/uid1/profile/mobileNumber').once('value', (snap) => {
                    console.log(snap.val());
                    const dbdata = snap.val();
                    console.log('data from api', dbdata)
                    dispatch({ type: 'CHECK_IF_USER_ALREADY_REGISTERED', value: dbdata })
                })
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchDB();
    }, [otp]);
    //

    // onAuthStateChange
    useEffect(() => {
        firebase.auth.onAuthStateChanged((user) => {
            const isCurrentUser = user;
            console.group('Current User inspection');
            console.groupEnd();
            if (isCurrentUser) {
                dispatch({ type: 'USER_SIGNED_IN', payload: isCurrentUser })
            }
            // return { ...state, currentUser: currentuser }
        })
        return () => {
            console.log(currentUser)
        }
    }, [currentUser])
    //


    // db calls
    const checkIfOldUser = (data) => {
        console.log(data);
        let isMatchFound = false;
        const countryCode = '+91'
        const trimphne = countryCode.concat(UserPhoneNumber.trim());

        if (data === trimphne && !isMatchFound) {
            isMatchFound = true
            console.log('match found: ', isMatchFound)
            dispatch({ type: ACTIONS.userisOld })
            console.log(state)
        }
        // for (let i in data) {
        //     let dbphn = data[i].phone;
        //     let dbphntrim = dbphn.trim();
        //     if (dbphntrim === trimphne && !isMatchFound) {
        //         isMatchFound = true
        //         console.log('match found: ', isMatchFound)
        //         dispatch({ type: ACTIONS.userisOld })
        //         console.log(state)
        //     }
        // }
        if (isMatchFound === false) {
            console.log('match found: ', isMatchFound)
            dispatch({ type: ACTIONS.userisNew })
        }
    }

    // otp from
    const handlelogin = (event) => {
        event.preventDefault();
        firebase.auth.settings.appVerificationDisabledForTesting = true;
        const appVerifier = new firebase.normalauth.RecaptchaVerifier('recaptcha-container');
        const code = otp;
        firebase.login(state.UserPhoneNumber, appVerifier).then((confirmationResult) => {
            return confirmationResult.confirm(code).then((result) => {
                const user = result.user;
                dispatch({ type: ACTIONS.user, payload: user });
                dispatch({ type: 'loginsuccess' })
                // alert(UserPhoneNumber + ' Logged in success.');
                history.push('/');
            })
        }).catch((error) => {
            alert(error.message);
        });
    }
    //otp from


    // func calls
    const handleInitialLogin = (event) => {
        event.preventDefault();
        console.log('handleInitialLogin()');
        if (data !== null) {
            console.log('handleInitialLogin() dispatch')
            dispatch({ type: ACTIONS.initialLogin, payload: state.UserPhoneNumber });
        }
        checkIfOldUser(data);
    }
    //
    return (
        <>
            <AuthContext.Provider value={{
                loginreducer: [state, dispatch],
                initiallogin: [handleInitialLogin],
                optlogin: [handlelogin]
            }}>
                {props.children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthContextProvider
