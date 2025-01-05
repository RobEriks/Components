import React from "react";
import { TiAdjustBrightness, TiAdjustContrast, TiAnchor } from "react-icons/ti";


const Alert = ({ color, icons, text }) => {

    let colorChoice = {
        red: "bg-red-400",
        green: "bg-green-400",
        blue: "bg-blue-400"
      }
    
    let iconChoice = {
        brightness: <TiAdjustBrightness/>,
        contrast: <TiAdjustContrast/>,
        anchor: <TiAnchor/>
    }



    return (
        <div className={` py-5  ${colorChoice[color]} `}>
        {iconChoice[icons]}
        {text}
        </div>
    )
}

export default Alert;