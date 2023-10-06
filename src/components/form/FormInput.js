import React from "react";

const FormInput = ({ name, label, type, placeholder, ...rest }) => {
  return (
    <div className="m-10 flex flex-col-reverse">
      <input
        type={type}
        id={name}
        name={name}
        className="bg-transparent dark:text-white text-primary rounded outline-none border-2 dark:border-dark-subtle border-light-subtle dark:focus:border-white focus:border-primary p-1 peer mt-2"
        placeholder={placeholder}
        {...rest}
      />
      <label
        htmlFor={name}
        className="text-semibold text-gray-400 dark:peer-focus:text-white peer-focus:text-primary self-start"
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
