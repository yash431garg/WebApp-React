import React, { useContext } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { AuthContext } from '../../containers/AuthContext';
import FormLogin from './FormLogin';
import RegisterMain from './RegisterMain';

const LoginMain = () => {
    //
    const { loginreducer, optlogin } = useContext(AuthContext);
    const [state] = loginreducer;
    const [handlelogin] = optlogin;


    //otp form
    const OtpForm = () => {
        return (
            <>
                <Form autoComplete='off' onSubmit={handlelogin} >
                    <Form.Group id='otp'>
                        <Form.Label>Enter OTP</Form.Label>
                        <Form.Control type='tel' name='otp' />
                        <span>enter '900012'</span>
                    </Form.Group>
                    <Button className='w-100 text-center mt-2' type='submit'>Login</Button>
                </Form>
            </>);
    };
    //end otp form


    return (
        <>
            <Container className='d-flex justify-content-center' style={{ minHeight: '100vh' }}>
                <div className='w-100' style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body>

                            {state.showLoginForm ? (<FormLogin />) : (<div style={{ display: 'none' }}></div>)} <br />
                            {state.showOtpForm ? (<><div id='recaptcha-container'></div><OtpForm /></>) :(<div style={{ display: 'none' }}></div>)}
                            {state.showRegistrationForm ? (<RegisterMain />) : (<div style={{ display: 'none' }}></div>)}

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
