import React from "react";
import { useState, useEffect } from "react";
import Header from "../../Componentes/HeaderComponent/Header";
import Cards_Exhibition from "../../Componentes/Cards_exhibition_Container/Cards_Exhibition";
import CardBuy from "../../Componentes/CardBuy_Container/CardBuy";


function Card_Page()
{

    

    return (
        <div>
            <Header/>
            <CardBuy/>
        </div>
    )
}

// <Cards_Exhibition title="Pokémon" CardType="Pokemon"/>
//<Cards_Exhibition title="Pokémon" CardType="Yugioh"/>

export default Card_Page;