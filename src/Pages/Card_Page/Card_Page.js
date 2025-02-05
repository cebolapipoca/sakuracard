import React from "react";
import { useState, useEffect } from "react";
import Header from "../../Componentes/HeaderComponent/Header";
import Cards_Exhibition from "../../Componentes/Cards_exhibition_Container/Cards_Exhibition";
import CardBuy from "../../Componentes/CardBuy_Container/CardBuy";



function Card_Page()
{

  const [card, setCard] = useState([])
  const [randomCard, setRandomCard] = useState([])
  let randomCardTable = []
  
  function RandomNumber(min, max)
  {
    let minCeiled = Math.ceil(min);
    let maxFloored = Math.floor(max);
    let Rand_Numb =  Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)


    return Rand_Numb;
  }
 
  useEffect(()=>
  {
    fetch("https://api.pokemontcg.io/v2/cards", {
        method: "GET",
    }).then(result => result.json()).then(cards => {
          console.log(cards.data[249])
          console.log("dados realizados com sucesso")

          setCard(cards.data)
          
        for(let i=1; i <= 5; i++)
        {
          let random = RandomNumber(0, 249)
          randomCardTable.push(cards.data[random])

          randomCardTable.forEach(CardRandom => 
          {
            if(CardRandom.id == randomCardTable[randomCardTable.length - 1])
              {
                i--
                randomCardTable.pop()
                console.log("REROLOU")
              }
          });
        }

        setRandomCard(randomCardTable)
    })
  }, []);

    return (
        <body>
            <Header/>
            <CardBuy/>
            <Cards_Exhibition title="Pokémon" data={card} randomCardTable={randomCard}/>
            <Cards_Exhibition title="Pokémon" data={card} randomCardTable={randomCard}/>
        </body>
    )
}

export default Card_Page;