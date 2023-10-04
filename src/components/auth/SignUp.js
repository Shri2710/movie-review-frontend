import React from "react";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="bg-primary">
      <div className="bg-secondary py-10 px-20 w-[600px]">
        <form>
          <Title>Sign Up</Title>
          <FormInput type="text" label="Name" name="name" placeholder="Rama" />
          <FormInput
            type="email"
            label="Email"
            name="email"
            placeholder="example@gmail.com"
          />
          <FormInput
            type="password"
            label="Password"
            name="password"
            placeholder="******"
          />
          <Submit value="Sign Up" />

          <div className="flex justify-between m-10">
            <div className="text-dark-subtle cursor-pointer hover:text-white">
              <Link to="/forget-password">Forgot Password ?</Link>
            </div>
            <div className="text-dark-subtle cursor-pointer hover:text-white">
              <Link to="/sign-in">Sign In</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
