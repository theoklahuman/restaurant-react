import { useState } from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  function onSubmitOfForm(data) {
    console.log(data);
  }
  const loginOptions = {
    username: {
      required: "username cannot be blank!",
      minLength: {
        value: 8,
        message: "username must be at least 8 characters long!",
      },
    },
    password: {
      required: "password cannot be blank!",
      minLength: {
        value: 5,
        message: "password must be at least 5 characters long!",
      },
    },
  };

  return (
    <div className="" id="sign-in__page">
      <h6>Sign In to manage your Account </h6>
      <form onSubmit={handleSubmit(onSubmitOfForm)}>
        <div>
          <label htmlFor="username">Username(required)</label>
          <input
            className="form-control"
            type="text"
            {...register("username", loginOptions.username)}
            placeholder="username"
          />
        </div>
        {errors.username && <p className="text-danger">{errors.username?.message}</p>}
        <div>
          <label htmlFor="password">Password(required)</label>
          <input
            className="form-control"
            type="password"
            {...register("password", loginOptions.password)}
          />
        </div>
        {errors.password && <p className="text-danger">{errors.password?.message}</p>}
        <button type="reset" className="btn btn-secondary">
          Cancel
        </button>
        <button className="btn btn-success">Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;
