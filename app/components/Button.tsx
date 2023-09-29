import React from "react";

type ButtonType = {
  type?: boolean;
  title?: string;
  alert?: () => void;
  userName: string;
};
const Button = ({ type, title, alert, userName }: ButtonType) => {
  return (
    <div>
      <button
        className={`${type && "bg-[#cd00c5] w-[100px] h-[30px]  rounded-sm my-5"}`}
        onClick={() => userName && alert}>
        {title}
      </button>
    </div>
  );
};

export default Button;
