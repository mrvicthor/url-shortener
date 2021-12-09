import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import "./signUp.css";

const SignUp = () => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const password = useRef();
  password.current = watch("password");

  const onSubmit = (values) => {
    reset();
    console.log(values);
  };
  return (
    <form className="signup-form " onSubmit={handleSubmit(onSubmit)}>
      <div className="form-wrapper">
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="fName">First Name</label>
          <input
            {...register("firstname", {
              required: true,
              minLength: 3,
            })}
            name="firstname"
            type="text"
            id="fName"
            placeholder="Enter first name..."
          />
          {errors.firstname?.type === "required" && (
            <p className="alert-danger">First name is required</p>
          )}
        </div>
        <div>
          <label htmlFor="lName">Last Name</label>
          <input
            {...register("lastname", {
              required: true,
              minLength: 3,
            })}
            name="lastname"
            type="text"
            id="lName"
            placeholder="Enter last name..."
          />
          {errors.lastname && (
            <p className="alert-danger">Last name is required</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            {...register("email", {
              required: "Email address is required...",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            name="email"
            type="email"
            id="email"
          />
          {errors.email && (
            <p className="alert-danger">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required...",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="alert-danger">{errors.password.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="password_repeat">Confirm Password</label>
          <input
            name="password_repeat"
            type="password"
            id="password_repeat"
            {...register("password_repeat", {
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
          {errors.password_repeat && (
            <p className="alert-danger">{errors.password_repeat.message}</p>
          )}
        </div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default SignUp;
