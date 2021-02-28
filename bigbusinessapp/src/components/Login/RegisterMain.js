import React, { useState, useContext } from 'react';
import { Form, Card, Button, Container } from 'react-bootstrap';
import firebase from '../../containers/firebase';
import { LoginContext } from "../../containers/LoginContext";

const RegisterMain = () => {

    const { mobile, registrationform } = useContext(LoginContext);
    const [displayRegisterForm] = registrationform;
    const [userMobileNum] = mobile;

    const REGISTERED_USERS_DB = firebase.database().ref('REGISTERED_USERS');

    const reg_FormData = {
        username: '',
        bname: '',
        email: '',
        btype: '',
        city: '',
        phone: ''
    }

    const [registrationFinalState, setRegisterFinalState] = useState(reg_FormData);
    //    const [checkValidUser, setCheckValidUser]= useState(userValid);

    //    useEffect(() => {
    //        console.log(registrationFinalState);
    //    }, [registrationFinalState])


    const handleFormDataChange = (event) => {
        const { name, value } = event.target;
        setRegisterFinalState({
            ...registrationFinalState,
            [name]: value,
        });
        console.log(registrationFinalState)
    }

    const checkValidations = () => {
        if (registrationFinalState !== ''
            && registrationFinalState.username
            && registrationFinalState.bname
            && registrationFinalState.email
            && registrationFinalState.btype && registrationFinalState.btype !== '--Choose--'
            && registrationFinalState.city
            && registrationFinalState.phone) {
            createNewUserDB(registrationFinalState);
        }

    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        checkValidations()
        //    createNewUserDB(registrationFinalState);
    }

    const createNewUserDB = (userData) => {
        //    const userValid = viewDB();
        console.table(userData);
        REGISTERED_USERS_DB.child(userMobileNum).set({ ...userData, 'uid': userMobileNum }, (error) => { console.error(error) });
    }

    return (
        <>
            <div style={{ display: displayRegisterForm }}>
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
                                    <Form.Group id='city'>
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type='text' value={registrationFinalState.city} name='city' onChange={(e) => handleFormDataChange(e)} required />
                                    </Form.Group>
                                    <Form.Group id='phone'>
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control className='alert-info' type='tel' value={userMobileNum} name='phone' onChange={(e) => handleFormDataChange(e)} required />
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
