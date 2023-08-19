import React from "react";

type ButtonType = {
  type?: string;
  title?: string;
};
const Button = ({ type, title }: ButtonType) => {
  return (
    <div>
      <button className={`${type && "bg-[#cd00c5] w-[100px] h-[30px]  rounded-sm my-5"}`}>
        {title}
      </button>
    </div>
  );
};

export default Button;
