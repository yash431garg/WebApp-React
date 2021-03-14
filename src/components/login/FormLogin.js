import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AuthContext } from '../../containers/AuthContext';


const FormLogin = () => {
    const { loginreducer, initiallogin } = useContext(AuthContext);
    const [state, dispatch] = loginreducer;
    const [handleInitialLogin] = initiallogin;

    // const [displayMainForm] = mainform;
    // const [userMobileNum, setUserMobileNum] = mobile;
    // const [checkValidations] = validation;
    // const [viewDb] = viewdb;



    return (
        <>
            <div>
                <Form autoComplete='off' onSubmit={handleInitialLogin} >
                    <Form.Group id='Name'>
                        <div id='recaptcha_ref'></div>
                        {/* <Form.Label>Enter Mobile Number</Form.Label> */}
                        <Form.Control type='tel' name='UserPhoneNumber' value={state.UserPhoneNumber} placeholder='Enter Mobile Number' onChange={(e) => dispatch({ type: 'loginformdata', field: e.target.name, value: e.target.value })} autoFocus required />
                        {/* <code style={{color:'grey'}}>Example: '9000900012'</code> */}
                    </Form.Group>
                    <Button style={{marginLeft:'35px'}} className='button' type='submit'>Login/Sign Up</Button>
                </Form>
            </div>
        </>
    )
}

export default FormLogin
