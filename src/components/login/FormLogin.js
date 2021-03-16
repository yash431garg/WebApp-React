import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../../containers/AuthContext";

const FormLogin = () => {
  const { loginreducer, initiallogin } = useContext(AuthContext);
  const [state, dispatch] = loginreducer;
  const [handleInitialLogin] = initiallogin;

  // const [displayMainForm] = mainform;
  // const [userMobileNum, setUserMobileNum] = mobile;
  // const [checkValidations] = validation;
  // const [viewDb] = viewdb;

  return (
    <Form
      autoComplete="off"
      onSubmit={handleInitialLogin}
      style={{ display: "flex" }}
    >
      {/* <Form.Label>Enter Mobile Number</Form.Label> */}
      <Form.Control
        className="login_form"
        type="tel"
        name="UserPhoneNumber"
        value={state.UserPhoneNumber}
        placeholder="Enter Mobile Number"
        onChange={(e) =>
          dispatch({
            type: "loginformdata",
            field: e.target.name,
            value: e.target.value,
          })
        }
        autoFocus
        required
      />
      {/* <code style={{color:'grey'}}>Example: '9000900012'</code> */}

      <Button
        style={{ marginLeft: "30px", width: "300px" }}
        className="button"
        type="submit"
      >
        Sign Up/Login
      </Button>
    </Form>
  );
};

export default FormLogin;
