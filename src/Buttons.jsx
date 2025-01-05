import React from "react";

const Button = ({ size, color, disabled, text }) => {

  let sizeChoice = ""
  let colorChoice = ""



  if (size === "small") {
    sizeChoice = "text-sm"
  } else if (size === "medium") {
    sizeChoice = "text-md"
  }

  if (color === "red") {
    colorChoice = "bg-red-500";
  } else if (color === "green") {
    colorChoice = "bg-green-500";
  } else {
    colorChoice = "bg-blue-500";
  }


  let disabledChoice = disabled ? "opacity-30 cursor-not-allowed" : "";

  return (
    <button
      className={`text-black rounded py-5 px-5 font-bold ${sizeChoice} ${colorChoice} ${disabledChoice}`}
      disabled={disabled}
    >
      {text}
    </button>
  )
  }

  export default Button;
