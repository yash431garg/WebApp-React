import React, { useContext } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { AuthContext } from '../../containers/AuthContext';
import FormLogin from './FormLogin';
import RegisterMain from './RegisterMain';

const LoginMain = () => {
    //
    const { loginreducer, optlogin } = useContext(AuthContext);
    const [state, dispatch] = loginreducer;
    const [handlelogin] = optlogin;


    //otp form
    const OtpForm = () => {
        return (
            <>
                <Form autoComplete='off' onSubmit={handlelogin} >
                    <Form.Group id='otp'>
                        <Form.Label>Enter OTP</Form.Label>
                        <Form.Control value={state.otp} type='tel' name='otp' onChange={(e) => dispatch({ type:'otpformdata', field: e.target.name, value: e.target.value })} autoFocus required />
                        {/* <code>enter '900012'</code> */}
                    </Form.Group>
                    <Button className='w-100 text-center mt-2' type='submit'>Login</Button>
                </Form>
            </>);
    };
    //end otp form


    return (
        <>
            <Container className='d-flex justify-content-center' >
                <div className='w-100' style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body>

                            {state.showLoginForm ? (<FormLogin />) : (<div style={{ display: 'none' }}></div>)} <br />
                            {state.showOtpForm ? (<><div id='recaptcha-container'></div><OtpForm /></>) : (<div style={{ display: 'none' }}></div>)}
                            {state.showRegistrationForm ? (<RegisterMain />) : (<div style={{ display: 'none' }}></div>)}

                        </Card.Body>

                    </Card>
                    {/* <div className='w-100 text-center mt-2'>
                        Already Have an Account?  Log In
         </div> */}

                </div>
            </Container>
        </>
    )
}

export default LoginMain
