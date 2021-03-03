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
                <h2 className='text-center mb-4'>Sign In</h2>
                <Form autoComplete='off' onSubmit={handleInitialLogin} >
                    <Form.Group id='Name'>
                        <div id='recaptcha_ref'></div>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type='tel' name='UserPhoneNumber' value={state.UserPhoneNumber} onChange={(e) => dispatch({ type: 'loginformdata', field: e.target.name, value: e.target.value })} required />
                        <span>enter '+91 9000900012'</span>
                    </Form.Group>
                    <Button className='w-100 text-center mt-2' type='submit'>Next</Button>
                </Form>
            </div>
        </>
    )
}

export default FormLogin
