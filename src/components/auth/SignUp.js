import React from "react";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";

const SignUp = () => {
  return (
    <div className="h-full flex justify-center items-center bg-primary">
      <div className="bg-secondary py-10 px-20 w-[600px]">
        <form>
          <Title>Sign Up</Title>
          <FormInput type="text" label="Name" name="name" placeholder="Rama" />
          <FormInput type="email" label="Email" name="email" placeholder="example@gmail.com" />
          <FormInput type="password" label="Password" name="password" placeholder="******" />
          <Submit value='Sign Up'/>

          <div className="flex justify-between m-10">
              <div  className="text-dark-subtle cursor-pointer hover:text-white">Forgot Password?</div>
              <div className="text-dark-subtle cursor-pointer hover:text-white">Sign In</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
