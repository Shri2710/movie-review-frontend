import React, { useState } from "react";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import { Link } from "react-router-dom";
import { createUser } from "../../api/auth";


const validateUserInfo = ({name,email,password})=>{
  const isValidEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 

  if(!name.trim()) return {ok:false,error:'Name should not be null'};
  if(!/^[a-z A-z]+$/.test(name)) return {ok:false,error:'Invalid Name'};

  if(!email.trim()) return {ok:false,error:'Email should not be null'};
  if(!isValidEmail.test(email)) return {ok:false,error:'Invalid Email'};

  if(!password.trim()) return {ok:false,error:'Password should not be null'};
  if(password.length < 8) return {ok:false,error:'Password Should\'nt be less than 8 characters'};

  return {ok:true}
}
const SignUp = () => {

  const [userInfo,setUserInfo] = useState({
    name:'',
    email:'',
    password:''
  })

  const {name,email,password} = userInfo;

  const handleChange = ({target})=>{
      const {name,value}=target;
      setUserInfo({...userInfo,[name]:value});
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    const {ok,error} = validateUserInfo(userInfo);

    if(!ok) console.log(error);

    const response = await createUser(userInfo);

    if(response.error) return console.log(response.error);
    console.log(response);
  }
  return (
    <div className="dark:bg-primary">
      <div className="dark:bg-secondary bg-white drop-shadow-lg py-10 px-20 w-[600px]">
        <form onSubmit={handleSubmit}>
          <Title>Sign Up</Title>
          <FormInput value={name} type="text" label="Name" onChange={handleChange} name="name" placeholder="Rama" />
          <FormInput
            type="text"
            label="Email"
            onChange={handleChange}
            value={email}
            name="email"
            placeholder="example@gmail.com"
          />
          <FormInput
            type="password"
            label="Password"
            onChange={handleChange}
            value={password}
            name="password"
            placeholder="******"
          />
          <Submit value="Sign Up" />

          <div className="flex justify-between m-10">
            <div className="dark:text-dark-subtle text-light-subtle cursor-pointer dark:hover:text-white hover:text-primary">
              <Link to="/forget-password">Forgot Password ?</Link>
            </div>
            <div className="dark:text-dark-subtle text-light-subtle cursor-pointer dark:hover:text-white hover:text-primary">
              <Link to="/sign-in">Sign In</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
