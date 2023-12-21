import RegisterForm from "./RegisterForm";

function RegisterPage({ onSelect }) {
  return (
    <div>
      <RegisterForm />
      <div className="row justify-content-start">
        <form action="/signin" method="GET">
          <p className="align-self-center col-8 col-lg-8">
            Already have an account?
          </p>
          <button
            className="btn btn-info col-3 col-lg-3"
            id="sign-in__button"
            onClick={() => onSelect("LoginPage")}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
