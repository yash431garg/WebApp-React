import React, { useContext, useState } from "react";
import { Form, Card, Button, Container } from "react-bootstrap";
import { AuthContext } from "../../containers/AuthContext";
// import firebase from '../../containers/firebase';
// import { LoginContext } from "../../containers/AuthContext";

const RegisterMain = () => {
  const reg_FormData = {
    firstName: "",
    lastName: "",
    businessName: "",
    businessType: "",
    emailId: "",
    mobileNumber: "",
  };

  const [registrationFinalState, setRegisterFinalState] = useState(
    reg_FormData
  );
  const { loginreducer } = useContext(AuthContext);
  const [state, dispatch] = loginreducer;
  console.log(state);

  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    if (name === "phone") {
      const countrycode = "+91";
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
  };

  const checkValidations = () => {
    if (
      registrationFinalState !== "" &&
      registrationFinalState.firstName &&
      registrationFinalState.lastName &&
      registrationFinalState.businessName &&
      registrationFinalState.businessType !== "--Choose--" &&
      registrationFinalState.emailId &&
      registrationFinalState.mobileNumber
    ) {
      return true;
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    checkValidations();
    if (checkValidations()) {
      dispatch({ type: "onregister", payload: registrationFinalState });
    }
    console.log("new user: ", state.newuserdata);
    dispatch({ type: "newuserregistersuccess" });
    // history.push("/dashboard");
  };

  return (
    <>
      <div style={{ display: "displayRegisterForm" }}>
        <Container
          className="d-flex justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card id="login_card" style={{ border: "none !important" }}>
              <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form autoComplete="off" onSubmit={onFormSubmit}>
                  <Form.Group id="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={registrationFinalState.firstName}
                      name="firstName"
                      onChange={(e) => handleFormDataChange(e)}
                      required
                    />
                  </Form.Group>
                  <Form.Group id="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={registrationFinalState.lastName}
                      name="lastName"
                      onChange={(e) => handleFormDataChange(e)}
                      required
                    />
                  </Form.Group>
                  <Form.Group id="businessName">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={registrationFinalState.businessName}
                      name="businessName"
                      onChange={(e) => handleFormDataChange(e)}
                      required
                    />
                  </Form.Group>
                  <Form.Group id="businessType">
                    <Form.Label>Business Type</Form.Label>
                    <Form.Control
                      as="select"
                      size="lg"
                      value={registrationFinalState.businessType}
                      name="businessType"
                      onChange={(e) => handleFormDataChange(e)}
                      required
                    >
                      <option>--Choose--</option>
                      <option>Unregistered Business</option>
                      <option>PVT Ltd</option>
                      <option>Sole Proprietorship</option>
                      <option>Start Up</option>
                      <option>Freelancer</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group id="emailId">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      value={registrationFinalState.emailId}
                      name="emailId"
                      onChange={(e) => handleFormDataChange(e)}
                      required
                    />
                  </Form.Group>
                  <Form.Group id="mobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      className="alert-info"
                      type="tel"
                      value={registrationFinalState.mobileNumber}
                      name="mobileNumber"
                      onChange={(e) => handleFormDataChange(e)}
                      required
                    />
                  </Form.Group>
                  <Button className="w-100 text-center mt-2" type="submit">
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};
export default RegisterMain;
