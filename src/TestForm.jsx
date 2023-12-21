import { useForm } from "react-hook-form";

function TestForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange"});
    const onSubmit = (data) => console.log(data);
    const registerOptions = {
        username: {
            required: "Username cannot be blank",
            min: {
                value: 5,
                message: "username must be at least 5 characters long!"
            }
        },
        password: {
            required: "password cannot be blank"
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username", registerOptions.username)} type="number" placeholder="username"/>
            {errors?.username && <p className="text-danger">{errors.username.message}</p>}
            <input {...register("password", registerOptions.password)} type="password" placeholder="password"/>
            {errors.password && <p className="text-danger">{registerOptions.password.required}</p>}
            <button>Register</button>
        </form>
    )
}

export default TestForm;