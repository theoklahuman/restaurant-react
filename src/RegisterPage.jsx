function RegisterPage() {
    return (
        <div className="" id="register__page">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h6>Employee Registration</h6>
        <form
          action="/register"
          method="POST"
          className="needs-validation"
          noValidate=""
        >
          <div className="row g-3">
            <div className="col-md-4 position-relative">
              <label htmlFor="firstname">First Name(required)</label>
              <input
                className="form-control"
                type="text"
                name="firstname"
                id="firstname"
                required=""
              />
            </div>
            <div className="col-md-4 position-relative">
              <label htmlFor="lastname">Last Name(required)</label>
              <input
                className="form-control"
                type="text"
                name="lastname"
                id="lastname"
                required=""
              />
            </div>
            <div className="col-md-4 position-relative">
              <label htmlFor="username">Username(required)</label>
              <input
                className="form-control"
                type="text"
                name="username"
                id="username"
                minLength={6}
                maxLength={15}
                required=""
              />
            </div>
            <div className="col-md-3 position-relative">
              <label htmlFor="password">Password(required)</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$"
                required=""
              />
              <div className="invalid-tooltip">
                Password must have at least One Uppercase letter, One Number and
                One Special Character
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <label htmlFor="password--reentered">
                Re-Enter Password(required)
              </label>
              <input
                className="form-control"
                type="password"
                name="password--reentered"
                id="password--reentered"
                required=""
              />
              <div className="password--reentered bg-danger">
                Passwords don't match!
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <label htmlFor="email">Email(required)</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                required=""
              />
            </div>
            <div className="col-md-3 position-relative">
              <label htmlFor="phone">Phone Number(Optional)</label>
              <input
                className="form-control"
                type="tel"
                name="phone"
                id="phone"
              />
            </div>
          </div>
          <button type="reset" className="btn btn-secondary">
            Cancel
          </button>
          <button className="btn btn-success">Register</button>
        </form>
        <div className="row justify-content-start">
          <form action="/signin" method="GET">
            <p className="align-self-center col-8 col-lg-8">
              Already have an account?
            </p>
            <button
              className="btn btn-info col-3 col-lg-3"
              id="sign-in__button"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
    )
}

export default RegisterPage;