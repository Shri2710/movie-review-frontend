import React from 'react'
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <div className="dark:bg-primary">
      <div className="dark:bg-secondary bg-white drop-shadow-lg py-10 px-20 w-[600px]">
        <form>
          <Title>Please enter your email</Title>
          <FormInput type="email" label="Email" name="email" placeholder="example@gmail.com" />
          <Submit value='Send Link'/>

          <div className="flex justify-between m-10">
              <div  className="dark:text-dark-subtle text-light-subtle cursor-pointer dark:hover:text-white hover:text-primary"><Link to='/sign-in'>Sign In</Link></div>
              <div className="dark:text-dark-subtle text-light-subtle cursor-pointer dark:hover:text-white hover:text-primary"><Link to='/sign-up'>Sign Up</Link></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword;