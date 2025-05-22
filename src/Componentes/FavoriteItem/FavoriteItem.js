import React from "react";
import './FavoriteItem.css'
import Red_Heart from '../../imagens/icons/heart_preenchido.svg'

function FavoriteItem(props)
{
    return (
        <a className="FavoriteItem" href={'/Card/' + props.IdFav} >
           <img src={props.image}/>
           <h1>{props.name}</h1>
           <img className="heart_red" src={Red_Heart}/>
        </a>
    )
}

export default FavoriteItem