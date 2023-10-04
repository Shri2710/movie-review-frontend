import React from 'react'
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <div className="bg-primary">
      <div className="bg-secondary py-10 px-20 w-[600px]">
        <form>
          <Title>Please enter your email</Title>
          <FormInput type="email" label="Email" name="email" placeholder="example@gmail.com" />
          <Submit value='Send Link'/>

          <div className="flex justify-between m-10">
              <div  className="text-dark-subtle cursor-pointer hover:text-white"><Link to='/sign-in'>Sign In</Link></div>
              <div className="text-dark-subtle cursor-pointer hover:text-white"><Link to='/sign-up'>Sign Up</Link></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword;