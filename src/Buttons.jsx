import React from "react";

const Button = ({ size, color, disabled, text }) => {

  let sizeChoice = {
    small: "text-sm",
    medium: "text-md",
    large:  "text-lg"
  }

  let colorChoice = {
    red: "bg-red-400",
    green: "bg-green-400",
    blue: "bg-blue-400"
  }

  let disabledChoice = disabled ? "opacity-30 cursor-not-allowed" : "";

  return (
    <button
      className={`text-black rounded py-5 px-5 font-bold ${sizeChoice} ${colorChoice} ${disabledChoice}`}
      
    >
      {text}
    </button>
  )
  }

  export default Button;
