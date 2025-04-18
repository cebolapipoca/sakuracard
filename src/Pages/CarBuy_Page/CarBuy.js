
import React, { useContext } from "react";
import Header from '../../Componentes/HeaderComponent/Header'
import '../CarBuy_Page/CarBuy.css'
import CardImage from '../../imagens/cards/card.png'
import InputSakura from "../../Componentes/Input/InputSakura";
import Login from "../../Componentes/Login/Login";
import Cadastro from "../../Componentes/Cadastro/Cadastro";
import Menu from "../../Componentes/Menu/Menu";
import { useState } from "react";




function CarBuy()
{

    let valorTotal = 0
    let [ValorFInal, setValorFinal] = useState(valorTotal)
    let frete = 5;


    function FormatNumber(number)
    {
        return number.toFixed(2)
    }

    function AbrirMenuCard(abrir)
    {

        const MenuCard = document.getElementById('cardbuy')

        if(abrir)
        {
            AbrirMenuPix(false)
            MenuCard.style.display = 'flex';
            MenuCard.style.animation = 'AnimationCardBuyAppearMobile 1s'
            MenuCard.focus()
        }
        else
        {
            MenuCard.style.animation = 'AnimationCardBuyAppearMobile 1s reverse'
            MenuCard.style.display = 'none'
        }
    }

    function AbrirMenuPix(abrir)
    {

        const MenuPix = document.getElementById('pixbuy')

        if(abrir)
            {
                AbrirMenuCard(false)
                MenuPix.style.display = 'flex'
                MenuPix.style.animation = 'AnimationCardBuyAppearMobile 1s'
                MenuPix.focus()
            }
            else
            {
                 MenuPix.style.display = 'none'
                MenuPix.style.animation = 'AnimationCardBuyAppearMobile 1s reverse'
            }
    }

    function LoadingData()
    {
        let session = sessionStorage.getItem('ClienteId');
        let Clientes = JSON.parse(localStorage.getItem('Clientes'))
        let ClientCarData = []

        try {
            Clientes.forEach(Cliente => {
                if(Cliente.Id == session)
                {
                  ClientCarData = Cliente.Carrinho
                }
            });
        }catch{

        }

        return ClientCarData;
    }

    function SomarValorTotal(unit, quant)
    {
        let total = unit * quant
        valorTotal += total
        console.log(FormatNumber(valorTotal))
        return total
    }

    function Comprar()
    {
        let session = sessionStorage.getItem('ClienteId');
        let Clientes = JSON.parse(localStorage.getItem('Clientes'))

        Clientes.forEach(Cliente => {
            if(Cliente.Id == session)
            {
                Cliente.Pedidos = Cliente.Carrinho;
                Cliente.Carrinho = []
                
            }
        });

        localStorage.setItem('Clientes', JSON.stringify(Clientes))
    }

    if(sessionStorage.getItem('ClienteId') != null || sessionStorage.getItem('ClienteId') != undefined )
    {
        return (
            <div>
                <Header/>
              
                
                <div className="shopCart_Content_Page">
                    <h1 className="Cart_title">Carrinho</h1>
                    <div className="CartShopping_ItensContainer">
                        <table className="table_Cart_Shopping" >
                            <tr>
                                <th>Item</th>
                                <th>Preço Unitário</th>
                                <th>Quantidade</th>
                                <th>Valor Total</th>
                            </tr>
    
                            {
                                LoadingData().map((card)=>
                                (
                                    <tr>
                                        <td className="CartBuy_Item">
                                            <div className="CartBuy_Item_Info1">
                                                <img src={card.image}></img>
                                                <h1>{card.name}</h1>
                                            </div>
                                        </td>
                                        <td className="CartBuy_Price">{card.price + ' €'}</td>
                                        <td className="CartBuy_Quantity"><input value={1}></input></td>
                                        <td className="CartBuy_PriceTotal">{FormatNumber(SomarValorTotal(card.price, 2)) + ' €'}</td>
                                    </tr>
                                ))  
                            }
                        </table>
                    </div>
    
                    <div className="buyInfo_section">
                        <div className="buyInfos_container">
                            <div className="buyInfo_Content">
                                <h1>SubTotal:</h1>
                                <h1>{FormatNumber(valorTotal) + ' €'}</h1>
                            </div>
    
                            <div className="buyInfo_Content">
                                <h1>Frete:</h1>
                                <h1>{frete + ' €'}</h1>
                            </div>
    
                            <div className="buyInfo_Content" id="buyinfo_valueTotal">
                                <h1>Valor Total:</h1>
                                <h1>{FormatNumber(parseFloat(valorTotal) + parseFloat(frete)) + ' €'}</h1>
                            </div>
    
                            <div className="buttons_container_cardBuy">
                                <button onClick={()=>{AbrirMenuPix(true)}}>Pagar com PIX</button>
                                <button onClick={()=>{AbrirMenuCard(true)}}>Pagar com Cartão</button>
                            </div>
                        </div>
    
                    </div>
    
                    <div className="CardBuy_Section">
                        <div className="formCardBuy" id="cardbuy">
                            <h1>Pagamento com CARTÃO</h1>
                            <InputSakura label="Nome no Cartão" width="90%"/>
                            <InputSakura label="CPF" width="90%"/>
                            <InputSakura label="Número do Cartão" label2="CVV" doubled={true} width="60%" width2="20%"/>
                            <InputSakura label="Parcelas" doubled={false} select={true} options={[
                                {value: "1" , text: '1x Parcela sem juros - ' + 'R$ ' + FormatNumber(6000/1)},
                                {value: "2" , text: '2x Parcelas sem juros - ' + 'R$ ' + FormatNumber(6000/2)},
                                {value: "3" , text: '3x Parcelas sem juros - ' + 'R$ ' + FormatNumber(6000/3)},
                                {value: "4" , text: '4x Parcelas sem juros - ' + 'R$ ' + FormatNumber(6000/4) },
                                {value: "5" , text: '5x Parcelas sem juros - ' + 'R$ ' + FormatNumber(6000/5)},
                                {value: "6" , text: '6x Parcelas sem juros - ' + 'R$ ' + FormatNumber(6000/6)},
                                {value: "7" , text: '7x Parcelas sem juros - ' + 'R$ ' + FormatNumber(6000/7)},
                                {value: "8" , text: '8x Parcelas sem juros - ' + 'R$ ' + FormatNumber(6000/8)},
                                {value: "9" , text: '9x Parcelas sem juros - ' + 'R$ ' + FormatNumber(6000/9)},
                                {value: "10" , text:'10x Parcelas sem juros - ' + 'R$ ' + FormatNumber(6000/10)},
                                {value: "11" , text:'11x Parcelas sem juros - ' + 'R$ ' + FormatNumber(6000/11)},
                                {value: "12" , text: '12x Parcelas sem juros - ' + 'R$ ' + FormatNumber(6000/12)},
                            ]} />
                            <div style={{width: '100%' , display: 'flex', justifyContent: 'center'}}>
                                <button className="button_cb" onClick={Comprar}>Comprar</button>
                            </div>
                        </div>
    
                        <div className="formCardBuy" id="pixbuy">
                            <h1>Pagamento com PIX</h1>
                            <InputSakura label="Nome Completo" width="90%"/>
                            <InputSakura label="CPF" width="90%"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

   
}

/**<tr>
                            <td className="CartBuy_Item">
                                <div className="CartBuy_Item_Info1">
                                    <img src={CardImage}></img>
                                    <h1>Carta Foda com um nome extremamente foda</h1>
                                </div>
                            </td>
                            <td className="CartBuy_Price">R$ 1000,00</td>
                            <td className="CartBuy_Quantity"><input value={1}></input></td>
                            <td className="CartBuy_PriceTotal">R$ 6000,00</td>
                        </tr> */

export default CarBuy;