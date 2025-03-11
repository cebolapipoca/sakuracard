import React from "react";
import './Favorite.css'

import Header from "../../Componentes/HeaderComponent/Header";
import FavoriteItem from "../../Componentes/FavoriteItem/FavoriteItem";

export default function FavoritePage()
{

    function PegarFavoritos()
    {
        let session = sessionStorage.getItem('ClienteId');
        let Clientes = JSON.parse(localStorage.getItem('Clientes'))
        let dados = []

        Clientes.forEach(Cliente => 
        {
            if(Cliente.Id == session)
            {
                dados = Cliente.Favoritos
            }
        })

        return dados
    }

    return (
        <div>
            <Header/>
            <h1 className="Favorite_Title">Favoritos</h1>

            <div className="favorite_list">
                {
                    PegarFavoritos().map((Favorito)=>(
                        <FavoriteItem name={Favorito.Name} image={Favorito.Image} IdFav={Favorito.Id}/>
                    ))
                }
            </div>
        </div>
    )
}