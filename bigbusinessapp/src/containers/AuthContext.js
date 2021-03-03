import React, { createContext, useEffect, useReducer, useCallback } from 'react';
// import { withRouter } from "react-router";
import firebase from '../containers/firebase';
export const AuthContext = createContext();


const reducer = (state, action) => {
    switch (action.type) {

        case 'loginformdata': {
            return { ...state, [action.field]: action.value }
        }
        case 'CHECK_IF_USER_ALREADY_REGISTERED': {
            console.table('data from dispatch', action.value)
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
            console.log('auth : ', action.payload)
            return {
                ...state,
                user: action.payload,
                isUserLoggedin: true
            }
        }

        case 'onregister': {
            console.log('onregister : ', action.type)
            console.log('onregister : ', action.payload)
            firebase.database.ref('NEWTEST').child(state.UserPhoneNumber).set(action.payload)
            return {
                ...state,
                newuserdata: action.payload
            }
        }
        default:
            break;
    }
    return state;
}

const initialState = {
    UserPhoneNumber: '',
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
    newuserdata: ''
}

const AuthContextProvider = (props) => {

    const ACTIONS = {
        initialLogin: 'CHECK_IF_USER_ALREADY_REGISTERED',
        userisOld: 'IF_OLD_USER',
        userisNew: 'IF_NEW_USER',
        user: 'AUTH_AND_ASSIGN_USER'
    }

    // reducer
    const [state, dispatch] = useReducer(reducer, initialState);
    // reducer

    //
    const { UserPhoneNumber,
        // showLoginForm,
        // showOtpForm,
        // showRegistrationForm,
        // isUserLoggedin,
        // isUser,
        // isNewUser,
        isOldUser,
        data,
        fetchDB,
        user,
        newuserdata } = state;
    //
    //
    useEffect(() => {
        console.log(newuserdata)
        async function fetchDB() {
            try {
                await firebase.database.ref('TEST').on('value', (snap) => {
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
    }, [newuserdata]);
    //


    // db calls
    const checkIfOldUser = (data) => {
        let isMatchFound = false;
        const countryCode = '+91'
        const trimphne = countryCode.concat(UserPhoneNumber.trim());
        for (let i in data) {
            let dbphn = data[i].phone;
            let dbphntrim = dbphn.trim();
            if (dbphntrim === trimphne && !isMatchFound) {
                isMatchFound = true
                console.log('match found: ', isMatchFound)
                dispatch({ type: ACTIONS.userisOld })
                console.log(state)
            }
        }
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
        firebase.login(state.UserPhoneNumber, appVerifier).then((confirmationResult) => {
            return confirmationResult.confirm('900012').then((result) => {
                const user = result.user;
                dispatch({ type: ACTIONS.user, payload: user });
                window.location.href = "/";
            })
        }).catch((error) => {
            console.log(error.message)
        });
    }
    //otp from


    // func calls
    const handleInitialLogin = (event) => {
        event.preventDefault();
        console.log('on clicking login button');
        if (data !== null) {
            console.log('calling dispatch')
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
