import React from "react";
import { useState, useEffect } from "react";
import "./Cards_Exhibition.css";
import Card from "../Cards/Card";

import card1 from "../../imagens/cards/image 30.png"
import card2 from "../../imagens/cards/card.png"

let teste;


function DefinirPreço(pricesTable)
{
  
    
    

  /*switch(pricesTable[0])
  {
    case "holofoil":
        return pricesTable.holofoil
    break;

    case "normal":
        return pricesTable.normal
    break;

    case "reverseHolofoil":
        return pricesTable.reverseHolofoil
    break;

    case "1stEditionHolofoil":
        return pricesTable.unlimitedHolofoil
    break;
  }*/
}
    

function Cards_Exhibition(props)
{

    return (
        <div className="cards_exhibition_container">
            <div className="cards_title">
                <h1>{props.title}</h1>
                <h2>Ver mais -&gt;</h2>
            </div>

            <div className="cards_exhibition_content">
                {
                    props.randomCardTable.map(
                    (dado)=>(
                        //<Card key={dado.id} price={dado.cardmarket != undefined? dado.cardmarket.prices.trendPrice + "€" : "2.50€"}></Card> 
                        <Card key={dado.id} image={dado.images.large} price={dado.cardmarket != undefined? dado.cardmarket.prices.trendPrice + "€" : "2.50€"}></Card>
                    )

                    )
                }
            </div>
        </div>
    )
}
export default Cards_Exhibition; 