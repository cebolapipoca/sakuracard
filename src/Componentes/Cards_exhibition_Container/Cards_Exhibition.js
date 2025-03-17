import React from "react";
import { useState, useEffect } from "react";
import "./Cards_Exhibition.css";
import Card_Real from "../Cards/Card";

import card1 from "../../imagens/cards/image 30.png"
import card2 from "../../imagens/cards/card.png"
import { data } from "react-router-dom";



function Cards_Exhibition(props)
{

    const [Card, setCard] = useState([])
    console.log(Card)

    function GetCard(CardType, LimitCard, Randomizer)
    {
        const TableCardType = [
            {nameType: "Pokemon", Url: "https://api.pokemontcg.io/v2/cards", requestData: undefined},
        ]

        function Randomizer(min, max, tableCard)
        {
            let CardRandomTable = []
            min = Math.ceil(min);
            max = Math.floor(max);
            let rand_number = Math.floor(Math.random() * (max - min) + min)

            for(let i=0; i < LimitCard; i++)
            {
                rand_number = Math.floor(Math.random() * (max - min) + min)

                try {
                    if(Object.values(tableCard[rand_number].tcgplayer.prices)[0].low != undefined)
                    {
                        CardRandomTable.push(tableCard[rand_number])
                    }
                }catch {
                    i--
                }

                //CardRandomTable.push(tableCard[rand_number])
            }

            setCard(CardRandomTable)
        }

        TableCardType.forEach(ApiType => 
        {
            fetch(ApiType.Url, {
                method: 'GET'
            }).then(resultType => resultType.json()).then((result)=>{
                Randomizer(1, 250, result.data)
                console.log('Request Executada com sucesso!')
            })
        });

    }

    useEffect(()=>{
        GetCard(props.CardType, 6, true)
    }, [])

    return (
        <div className="cards_exhibition_container">
            <div className="cards_title">
                <h1>{props.title}</h1>
                <h2>Ver mais -&gt;</h2>
            </div>

            <div className="cards_exhibition_content">
                {
                    
                    Card.map((dataCard)=>(
                        <Card_Real keys={dataCard.id} image={dataCard.images?.large} price={Object.values(dataCard.tcgplayer?.prices)[0].mid + " R$"}></Card_Real>
                    ))
                
                }
            </div>
        </div>
    )
}
export default Cards_Exhibition; 

//<Card key={dataCard.id} price={Object.values(dataCard.tcgplayer?.prices)[0].mid}></Card>