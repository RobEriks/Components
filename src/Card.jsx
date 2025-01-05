import React from "react";


const Card = ({ href, imgAlt, imgSrc}) => {


    return (
        <a href={href}>
        <img
           src={imgSrc}
           alt={imgAlt} />
        </a>

    )
}

export default Card;