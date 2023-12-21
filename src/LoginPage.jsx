import { useState } from "react";
import LoginForm from "./LoginForm";

function LoginPage({onSelect}) {
  return (
    <div>
      <LoginForm />
      <a href="#">
        <p>Forgot Password?</p>
      </a>
      <div className="row justify-content-start">
          <p className="align-self-center col-7 col-lg-2">
            Don't have an account?
          </p>
          <button className="btn btn-info col-3 col-lg-2" id="register-button" onClick={() => onSelect("RegisterPage")}>
            Register
          </button>
      </div>
    </div>
  );
}

export default LoginPage;
