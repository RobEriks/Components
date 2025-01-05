import React from "react";
import { IoAirplane, IoBalloon, IoBarbell } from "react-icons/io5";



const Badge = ({ size, color, icon, text }) => {

    
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

    let iconChoice = {
        airplane: <IoAirplane className="w-10 h-10" />,
        balloon: <IoBalloon className="w-10 h-10"/>,
        barbell: <IoBarbell className="w-10 h-10"/>
    }  

    return (
        <span
      className={`inline-flex items-center    ${colorChoice[color]} ${sizeChoice[size]}`}
    >
      {iconChoice[icon]}
      {text}
    </span>
    )
}

export default Badge;