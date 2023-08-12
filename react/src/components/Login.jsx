import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="text-center">
        <form action="/login" class="form-signin" method="POST">
          <img
            className="mb-4"
            src="/images/king.png"
            alt=""
            width="72"
            height="72"
          ></img>
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>

          <input
            type="email"
            id="inputEmail"
            name="email"
            className="form-control"
            placeholder="Email address"
            required
            autofocus
          ></input>
          <input
            type="password"
            id="inputPassword"
            name="password"
            className="form-control"
            placeholder="Password"
            required
          ></input>
          <div className="checkbox mb-3"></div>
          <Button className="btn btn-lg btn-primary btn-block" type="submit">
            Login
          </Button>
        </form>
      </div>
    </>
  );
}
