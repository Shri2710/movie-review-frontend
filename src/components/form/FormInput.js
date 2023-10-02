import React from "react";

const FormInput = ({name,label,type,placeholder,...rest}) => {
  return (
    <div className="m-10 flex flex-col-reverse">
      <input
        type={type}
        id={name}
        name={name}
        className="bg-transparent text-white rounded outline-none border-2 border-dark-subtle focus:border-white p-1 peer mt-2"
        placeholder={placeholder}
        {...rest}
      />
      <label
        htmlFor={name}
        className="text-semibold text-gray-400 peer-focus:text-white self-start"
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
