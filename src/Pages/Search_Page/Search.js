import React, { useEffect } from "react";
import './Search.css'
import Header from "../../Componentes/HeaderComponent/Header";
import SearchBar from "../../Componentes/Search_Bar/SearchBar";
import Card from "../../Componentes/Cards/Card";
import pokemon from 'pokemontcgsdk'
import { useParams } from "react-router-dom";
import { useState } from "react";


export default function Search()
{
    
    pokemon.configure({apiKey: '123abc'})
    const [card, SetCard] = useState([])
    let search = useParams().q

    function CarregarCard(q)
    {
        console.log('aaaaaaa')
        let tableCard = []
        pokemon.card.where({q: 'name:' + q + '*'}).then(result => {
            
                result.data.forEach(element => {
                    try {
                        if(Object.values(element.tcgplayer.prices)[0].low != undefined)
                            {
                                tableCard.push(element)
                                
                            }
                    }catch {
                        
                    }
                    
                    SetCard(tableCard)
            });

        })
    }

    

    useEffect(()=>{
        CarregarCard(search)
    }, [])
   

    return (
        <div>
            <Header/>
            <SearchBar/>


            <div className="cardsExibhitionAll">
                <div className="cardExibhitionBox">
                    {card.map((dataCard)=>(
                        <Card keys={dataCard.id} image={dataCard.images?.large} price={Object.values(dataCard.tcgplayer?.prices)[0].mid + " R$"}></Card>
                    ))}
                </div>
            </div>
        </div>
    )
}