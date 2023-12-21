import { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function captureChange(evt) {
    setFormData((currentData) => {
      return {
        ...currentData,
        [evt.target.name]: evt.target.value,
      };
    });
  }

  function handleSubmit() {
    console.log(formData);
  }

  return (
    <div className="" id="sign-in__page">
      <h6>Sign In to manage your Account </h6>
      <form action="">
        <div>
          <label htmlFor="username">Username(required)</label>
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={captureChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password(required)</label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={captureChange}
            required
          />
        </div>
        <button type="reset" className="btn btn-secondary">
          Cancel
        </button>
        <button className="btn btn-success" onClick={handleSubmit}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
