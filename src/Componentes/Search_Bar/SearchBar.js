import React from "react";
import './SearchBar.css';
import Lupa_Icon from '../../imagens/icons/lupa_icon.svg'
import { Pesquisar } from "../../App";




export default function SearchBar()
{

        function Pesquisar(event, q)
        {

            const SearchInput = document.getElementById('search_Input')

            if(event.key == 'Enter')
            {
            window.location.href = '/Search/' + SearchInput.value
            }
        }

    return (
        <div className="header_searchBar">
            <input type="text" id='search_Input' onKeyUp={(event)=>{Pesquisar(event)}}></input>
            <button><img src={Lupa_Icon}></img></button>
      </div>
    )
}