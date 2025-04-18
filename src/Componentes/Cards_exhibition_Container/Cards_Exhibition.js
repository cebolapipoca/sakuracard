import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "./Cards_Exhibition.css";
import Card_Real from "../Cards/Card";
import card1 from "../../imagens/cards/image 30.png"
import card2 from "../../imagens/cards/card.png"
import { data } from "react-router-dom";
import Loading from "../Loading/Loading";
import ContextoTeste, { ContextTeste } from "../../Contextos/ContextoTeste";



function Cards_Exhibition(props)
{

    const [Card, setCard] = useState([])
    const [loading, setLoading] = useState(false)
    const [load, setLoad] = useState(false)
    const ContextTeste = useContext(ContextoTeste);
   
  
    
    console.log(ContextTeste)

    function Randomizer(min, max, tableCard, LimitCard)
        {
            
            let CardRandomTable = []
            min = Math.ceil(min);
            max = Math.floor(max);
            let rand_number = Math.floor(Math.random() * (max - min) + min)
            let tableteste = tableCard.data
            
            

        if(tableteste != undefined || tableteste != null)
        {

            try { 
                for(let i=0; i < LimitCard; i++)
                {
                    rand_number = Math.floor(Math.random() * (max - min) + min)
                    CardRandomTable.push(tableteste[rand_number])
                    setLoad(true)
                }
                console.log('sexo')
                console.log(CardRandomTable)
                setCard(CardRandomTable)
            }catch {
                console.log('erro')
               
            }
            /*for(let i=0; i < LimitCard; i++)
                {
                   
                   
                    
    
                   /* try {
                        if(tableteste[0][rand_number].tcgplayer.prices[0].low != undefined)
                        {
                            CardRandomTable.push(tableCard[rand_number])
                            setLoading(true)
                        }
                    }catch {
                        console.log('caiu no catch')
                        i--
                    }
    
                    //CardRandomTable.push(tableCard[rand_number])
                }*/
        }
    }

    function GetPrice(dataCard)
    {
        if(dataCard.tcgplayer != undefined || dataCard.tcgplayer != null)
        {
            if(dataCard.tcgplayer.prices != undefined || dataCard.tcgplayer.prices != null)
            {
                console.log(Object.values(dataCard.tcgplayer?.prices)[0].mid)
                return Object.values(dataCard.tcgplayer?.prices)[0].mid
            }
            else {
                console.log(Object.values(dataCard.cardmarket?.prices).trendPrice)
                return Object.values(dataCard.cardmarket?.prices).trendPrice
            }
        }
    }
    
    useEffect(()=>{
       if(load == false)
       {
        Randomizer(0, 200, ContextTeste, 5)
       }
    }, [ContextTeste])

    if(Card.length == 0 )
    {
        return (
            <div className="cards_exhibition_container">
                <div className="cards_title">
                    <h1>{props.title}</h1>
                    <h2>Ver mais -&gt;</h2>
                </div>
    
                <div className="cards_exhibition_content">
                    {
                        <Loading screen={false}/>
                    }
                </div>

                <Loading screen={true} display='flex'/>
            </div>
        )
    }
    else
    {
        
        return (
            <div className="cards_exhibition_container">
                <div className="cards_title">
                    <h1>{props.title}</h1>
                    <h2>Ver mais -&gt;</h2>
                </div>
                {console.log(Card)}
    
                <div className="cards_exhibition_content">
                    {
                        Card.map((dataCard)=>(
                            <Card_Real keys={dataCard.id} image={dataCard.images?.large} price={GetPrice(dataCard)}>{}</Card_Real>
                        ))
                    
                    }

                <Loading screen={true} display='none'/>
                </div>
            </div>
        )
    }

    
}
export default Cards_Exhibition; 

//<Card key={dataCard.id} price={Object.values(dataCard.tcgplayer?.prices)[0].mid}></Card>