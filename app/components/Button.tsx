import React from "react";

type ButtonType = {
  type?: boolean;
  title?: string;
  alert?: () => void;
};
const Button = ({ type, title, alert }: ButtonType) => {
  return (
    <div>
      <button
        className={`${type && "bg-[#cd00c5] w-[100px] h-[30px]  rounded-sm my-5"}`}
        onClick={alert}>
        {title}
      </button>
    </div>
  );
};

export default Button;
