import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { LoginContext } from '../../containers/LoginContext';

const FormLogin = () => {
    const { mainform, mobile, validation, viewdb } = useContext(LoginContext);

    const [displayMainForm] = mainform;
    const [userMobileNum, setUserMobileNum] = mobile;
    const [checkValidations] = validation;
    const [viewDb] = viewdb;



    return (
        <>
            <div style={{ display: displayMainForm }}>
                <Form autoComplete='off' onSubmit={checkValidations}>
                    <Form.Group id='Name'>
                        <div id='recaptcha_ref'></div>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type='tel' name='mobile' value={userMobileNum} onChange={(e) => setUserMobileNum(e.target.value)} required />
                        <span>enter '+91 9000900012'</span>
                    </Form.Group>
                    <Button className='w-100 text-center mt-2' type='submit'>Next</Button>
                    <Button className='w-100 text-center mt-2' type='button' onClick={viewDb}>View DB</Button>
                </Form>
            </div>
        </>
    )
}

export default FormLogin
