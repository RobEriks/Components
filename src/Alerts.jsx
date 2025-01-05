import React from "react";
import { TiAdjustBrightness, TiAdjustContrast, TiAnchor } from "react-icons/ti";
import { IoIosWarning } from "react-icons/io";


const Alert = ({ color, icon, text }) => {

    let colorChoice = {
        red: "bg-red-400",
        green: "bg-green-400",
        blue: "bg-blue-400"
      }
    
    let iconChoice = {
        warning: <IoIosWarning/>,
        contrast: <TiAdjustContrast/>,
        anchor: <TiAnchor/>
    }



    return (
        <div className={` p-4 rounded-lg ${colorChoice[color]} `}>
        {iconChoice[icon]}
        {text}
        </div>
    )
}

export default Alert;