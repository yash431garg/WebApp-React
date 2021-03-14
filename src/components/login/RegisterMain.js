import React, { useContext, useState } from 'react';
import { Form, Card, Button, Container } from 'react-bootstrap';
import { AuthContext } from '../../containers/AuthContext';
import {useHistory} from 'react-router-dom';
// import firebase from '../../containers/firebase';
// import { LoginContext } from "../../containers/AuthContext";

const RegisterMain = () => {
    const history  = useHistory();

    const reg_FormData = {
        username: '',
        bname: '',
        email: '',
        btype: '',
        // city: '',
        phone: ''
    }

    const [registrationFinalState, setRegisterFinalState] = useState(reg_FormData);
    const { loginreducer } = useContext(AuthContext);
    const [state, dispatch] = loginreducer;
    console.log(state);




    const handleFormDataChange = (event) => {
        const { name, value } = event.target;
        if (name === 'phone') {
            const countrycode = '+91'
            const ccphne = countrycode.concat(value);
            // console.log(ccphne)
            setRegisterFinalState({
                ...registrationFinalState,
                [name]: ccphne,
            });
        } else {
            setRegisterFinalState({
                ...registrationFinalState,
                [name]: value,
            });
        }
    }

    const checkValidations = () => {
        if (registrationFinalState !== ''
            && registrationFinalState.username
            && registrationFinalState.bname
            && registrationFinalState.email
            && registrationFinalState.btype && registrationFinalState.btype !== '--Choose--'
            // && registrationFinalState.city
            && registrationFinalState.phone) {
            return true;
        }

    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        checkValidations()
        if (checkValidations()) {
            dispatch({ type: 'onregister', payload: registrationFinalState })
        }
        console.log('new user: ', state.newuserdata);
        dispatch({type:'newuserregistersuccess'})
        history.push('/dashboard');
    }


    return (
        <>
            <div style={{ display: "displayRegisterForm" }}>
                <Container className='d-flex justify-content-center' style={{ minHeight: '100vh' }}>
                    <div className='w-100' style={{ maxWidth: '400px' }}>
                        <Card>
                            <Card.Body>
                                <h2 className='text-center mb-4'>Sign Up</h2>
                                <Form autoComplete='off' onSubmit={onFormSubmit}>
                                    <Form.Group id='Name'>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type='text' value={registrationFinalState.username} name='username' onChange={(e) => handleFormDataChange(e)} required />
                                    </Form.Group>
                                    <Form.Group id='businessname'>
                                        <Form.Label>Business Name</Form.Label>
                                        <Form.Control type='text' value={registrationFinalState.bname} name='bname' onChange={(e) => handleFormDataChange(e)} required />
                                    </Form.Group>
                                    <Form.Group id='email'>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type='email' value={registrationFinalState.email} name='email' onChange={(e) => handleFormDataChange(e)} required />
                                    </Form.Group>
                                    <Form.Group id='businesstype'>
                                        <Form.Label>Business Type</Form.Label>
                                        <Form.Control as='select' size='lg' value={registrationFinalState.btype} name='btype' onChange={(e) => handleFormDataChange(e)} required>
                                            <option>--Choose--</option>
                                            <option>Unregistered Business</option>
                                            <option>PVT Ltd</option>
                                            <option>Sole Proprietorship</option>
                                            <option>Start Up</option>
                                            <option>Freelancer</option>
                                        </Form.Control>
                                    </Form.Group>
                                    {/* <Form.Group id='city'>
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type='text' value={registrationFinalState.city} name='city' onChange={(e) => handleFormDataChange(e)} required />
                                    </Form.Group> */}
                                    <Form.Group id='phone'>
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control  className='alert-info' type='tel' value={state.UserPhoneNumber} name='phone' onChange={(e) => handleFormDataChange(e)} required />
                                    </Form.Group>
                                    <Button className='w-100 text-center mt-2' type='submit'>Sign Up</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default RegisterMain
