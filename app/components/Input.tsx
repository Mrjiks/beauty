import React from "react";
type InputType = {
  label: string;
  type: string;
  id: string;
  value: string;
  placeholder: string;
};

const Input = ({ label, type, id, value, placeholder }: InputType) => {
  return (
    <div className='flex flex-col gap-4'>
      <label htmlFor='name'>{label}</label>
      <input
        required
        type={type}
        name={label}
        id='name'
        placeholder={placeholder}
        className='rounded-sm placeholder:p-4 h-[30px] text-black'
      />
    </div>
  );
};

export default Input;
