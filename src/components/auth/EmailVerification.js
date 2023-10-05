import React, { useEffect, useReducer, useState } from "react";
import Title from "../form/Title";
import Submit from "../form/Submit";

const OTP_LENGTH = 6;
const EmailVerification = () => {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [activeOtpIndex,setActiveOtpIndex]=useState(0);

  const inputRef = useReducer();
  const handleOtpChange = ({target},index)=>{
      const {value} = target;
      const newOtp = otp;
      newOtp[index]=value;
      if(value){
         setActiveOtpIndex(index + 1);
      }
      setOtp(newOtp);
  }

  const handleKeyDown = ({ key }, index) => {
    if (key === "Backspace") {
      setActiveOtpIndex(index-1);
        const newOtp = otp;
        newOtp[index] = '';
        setOtp(otp);
     }
  };

  useEffect(()=>{
    inputRef.current?.focus();
  },[activeOtpIndex]);
  return (
    <div className="bg-primary">
      <div className="bg-secondary py-10 px-20 w-[600px]">
        <form>
          <Title>Please Enter your OTP to verify your account</Title>
          <p className="text-dark-subtle text-center mt-5">
            OTP has send to your mail
          </p>
          <div className="flex justify-center items-center space-x-4 mt-8">
            {otp.map((_, index) => {
              return (
                <input
                  ref={activeOtpIndex === index ? inputRef : null}
                  key={index}
                  value={otp[index] || ''}
                  onChange={(e)=> handleOtpChange(e,index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  type="number"
                  className="w-12 h-12 border-2 border-dark-subtle rounded focus:border-white outline-none bg-transparent text-center text-white spin-btn-none"
                  maxLength={1}
                />
              );
            })}
          </div>
          <Submit value="Verify" />
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
