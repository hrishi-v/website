import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="text-center">
        <form action="/register" className="form-signin" method="POST">
          <img
            className="mb-4"
            src="/images/king.png"
            alt=""
            width="72"
            height="72"
          ></img>
          <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>

          <input
            type="email"
            id="inputEmail"
            name="email"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          ></input>
          <input
            type="password"
            id="inputPassword"
            name="password"
            class="form-control"
            placeholder="Password"
            required
          ></input>
          <div class="checkbox mb-3"></div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
