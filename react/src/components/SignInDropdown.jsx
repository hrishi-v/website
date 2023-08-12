import { FormControl, NavDropdown, Form, Button } from "react-bootstrap";

const SignIn = () => {
  return (
    <div action="/login" className="form-signin">
      <NavDropdown className="signin-nav-dropdown" title="Login">
        <Form className="dropdown">
          <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
          <FormControl
            className="field"
            placeholder="Email address"
            aria-label="Email address"
            required
          />
          <FormControl
            className="field"
            placeholder="Password"
            aria-label="Password"
            required
          />
          <Button
            className="login-btn btn btn-m btn-primary btn-block"
            type="submit"
          >
            Login
          </Button>
        </Form>
      </NavDropdown>
    </div>
  );
};

export default SignIn;
