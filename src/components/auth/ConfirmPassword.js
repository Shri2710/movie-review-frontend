import React from 'react';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';

const ConfirmPassword = () => {
  return (
    <div className="dark:bg-primary">
      <div className="dark:bg-secondary bg-white drop-shadow-lg py-10 px-20 w-[600px]">
        <form>
          <Title>Enter New Password</Title>
          <FormInput type="password" label="New Password" name="newpassword" placeholder="New Password" />
          <FormInput type="password" label="Confirm Password" name="confirm password" placeholder="Confirm Password" />
          <Submit value='Confirm Password'/>
        </form>
      </div>
    </div>
  )
}

export default ConfirmPassword;