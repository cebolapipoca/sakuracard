
import React from "react";
import "./CardBuy.css"
import BuyCar from "../../imagens/icons/BuyCar_Icon.svg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import pokemon from 'pokemontcgsdk'
import heart_icon from '../../imagens/icons/heart_icon.svg'
import Message, { AbrirMessageBox } from "../Alert_Message/Message";

pokemon.configure({apiKey: '34b24c5b-9f85-4cc4-9bf6-d15f006584c7'})


function CardBuy()
{

   
    let parameters = useParams()
    let [data,  setData] = useState([])


    function SetData(infos) {
        setData(infos)
    }

    function GetCardData()
    {

        let Card_info = {}

        pokemon.card.find(parameters.id).then(card => {
            Card_info = 
            {
             Id: card.id,
             name: card.name, 
             price: [Object.values(card.tcgplayer?.prices)[0].low,
                     Object.values(card.tcgplayer?.prices)[0].mid,
                     Object.values(card.tcgplayer?.prices)[0].high],
             image: card.images?.large
             }    

            setData(Card_info)
        })
    }

    function AdicionarCarrinho(price)
    {
        let session = sessionStorage.getItem('ClienteId');
        let Clientes = JSON.parse(localStorage.getItem('Clientes'))

        console.log(JSON.parse(localStorage.getItem('Clientes')))
        
            Clientes.forEach(Cliente => {
                if(Cliente.Id == session)
                {
                   let CardData = data
                   CardData.price = price
                   if(Cliente.Carrinho.push(CardData))
                   {
                        AbrirMessageBox('Item Adicionado ao Carrinho')
                   }
                }
            });
        

        
        

        localStorage.setItem('Clientes', JSON.stringify(Clientes))
    }

    function AdicionarFavoritos()
    {
        let session = sessionStorage.getItem('ClienteId');
        let Clientes = JSON.parse(localStorage.getItem('Clientes'))

        Clientes.forEach(Cliente => {
            if(Cliente.Id == session)
            {
               let dados = {
                Id: data.Id,
                Name: data.name,
                Image: data.image
               }

               Cliente.Favoritos.push(dados)
            }
        });

        localStorage.setItem('Clientes', JSON.stringify(Clientes))
    }

    useEffect(()=>{
      GetCardData()
    }, [parameters])

    

    return (
        
    <div className="CarBuy_Section">
        <Message/>
        <div className="Card_Title">
            <h1 className="">{data.name}</h1>
            <img src={heart_icon} onClick={AdicionarFavoritos}></img>
        </div>

        <div className="CardBuy_Container">
            <div className="ShowCardImage">
                <div className="Card_Image">
                    <img src={data.image}></img>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgjvHVKQ4LFkA0tiy0MA4PSJXG7g26FpRjw&s"></img>
                </div>
            </div>

            <table className="table_cardbuy">
                <tr className="table_header">
                    <th className="table_header_cb">Idioma</th>
                    <th className="table_header_cb">Qualidade</th>
                    <th className="table_header_cb">Extra</th>
                    <th className="table_header_cb">Estoque</th>
                    <th className="table_header_cb">Preço</th>
                    <th className="table_header_cb">Quantidade</th>
                </tr>
                
                {
                    Array.from(data.price??[]).map((info)=>
                    (
                        <tr className="table_row_price table_row_cb">
                            <td className="table_data_cb"><img src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg"></img></td>
                            <td className="table_data_cb">SP</td>
                            <td className="table_data_cb">Foil</td>
                            <td className="table_data_cb">2 unid</td>
                            <td className="table_data_cb">{info + ' €'}</td>
                            <td className="table_data_cb"><input className="input_quantity_cb"/></td>
                            <td className="table_data_cb"><img src={BuyCar} onClick={()=>AdicionarCarrinho(info)} id="buycar_CardBuy"></img></td>
                        </tr>
                    ))
                }

            </table>
        </div>
    </div>
    )
}

/*
    <tr className="table_row_price table_row_cb">
        <td className="table_data_cb"><img src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg"></img></td>
        <td className="table_data_cb">SP</td>
        <td className="table_data_cb">Foil</td>
        <td className="table_data_cb">2 unid</td>
        <td className="table_data_cb">129,00 R$</td>
        <td className="table_data_cb"><input className="input_quantity_cb"/></td>
        <td className="table_data_cb"><img src={BuyCar} id="buycar_CardBuy"></img></td>
    </tr>
*/

export default CardBuy;