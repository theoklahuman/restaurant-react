import { useForm } from "react-hook-form";

function RegisterForm() {
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
  const registerOptions = {
    firstname: {
      required: "First Name cannot be blank!",
    },
    lastname: {
      required: "Last Name cannot be blank!",
    },
    username: {
      required: "username cannot be blank!",
      minLength: {
        value: 8,
        message: "username must be at least 8 characters long!",
      },
    },
    password: {
      required: "password cannot be blank!",
      pattern: {
        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/,
        message: "Password must contain at least 1 capital letter, 1 number and 1 special character!"
    },
    minLength: {
        value: 8,
        message: "password must be at least 8 characters long!",
      },
    },    
    email: {
        required: "Email is required!"
    }
  };
  return (
    <div className="" id="register__page">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h6>Employee Registration</h6>
          <form onSubmit={handleSubmit(onSubmitOfForm)}>
            <div className="row g-3">
              <div className="col-md-4 position-relative">
                <label htmlFor="firstname">First Name(required)</label>
                <input
                  className="form-control"
                  type="text"
                  name="firstname"
                  {...register("firstname", registerOptions.firstname)}
                  id="firstname"
                />
              </div>
              {errors.firstname && <p className="text-danger">{errors.firstname?.message}</p>}
              <div className="col-md-4 position-relative">
                <label htmlFor="lastname">Last Name(required)</label>
                <input
                  className="form-control"
                  type="text"
                  name="lastname"
                  {...register("lastname", registerOptions.lastname)}
                  id="lastname"
                />
              </div>
              {errors.lastname && <p className="text-danger">{errors.lastname?.message}</p>}
              <div className="col-md-4 position-relative">
                <label htmlFor="username">Username(required)</label>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  {...register("username", registerOptions.username)}
                  id="username"
                />
              </div>
              {errors.username && <p className="text-danger">{errors.username?.message}</p>}
              <div className="col-md-3 position-relative">
                <label htmlFor="password">Password(required)</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  {...register("password", registerOptions.password)}
                />
              </div>
             {errors.password && <p className="text-danger">{errors.password?.message}</p>}
              {/* <div className="col-md-3 position-relative">
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
              </div> */}
              <div className="col-md-3 position-relative">
                <label htmlFor="email">Email(required)</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", registerOptions.email)}
                />
              </div>
              {errors.email && <p className="text-danger">{errors.email?.message}</p>}
              <div className="col-md-3 position-relative">
                <label htmlFor="phone">Phone Number(Optional)</label>
                <input
                  className="form-control"
                  type="tel"
                  name="phone"
                  id="phone"
                  {...register("phone")}
                />
              </div>
            </div>
            <button type="reset" className="btn btn-secondary">
              Cancel
            </button>
            <button className="btn btn-success">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
