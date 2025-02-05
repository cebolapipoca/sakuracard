import React from "react";
import "./Card.css";
import Card_Image1 from '../../imagens/cards/card.png'
import Card2 from "../../imagens/cards/image 30.png"



function Card(props)
{
    return (
        <div className="Card">
            <img src={props.image}></img>
            <h2>{props.price}</h2>
        </div>
    )
}


export default Card;