
import React from "react";
import Header from '../../Componentes/HeaderComponent/Header'
import '../CarBuy_Page/CarBuy.css'
import CardImage from '../../imagens/cards/card.png'

function CarBuy()
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

                        <tr>
                            <td className="CartBuy_Item">
                                <div className="CartBuy_Item_Info1">
                                    <img src={CardImage}></img>
                                    <h1>Carta Foda com um nome extremamente foda</h1>
                                </div>
                            </td>
                            <td className="CartBuy_Price">R$ 1000,00</td>
                            <td className="CartBuy_Quantity"><input value={1}></input></td>
                            <td className="CartBuy_PriceTotal">R$ 6000,00</td>
                        </tr>

                        <tr>
                            <td className="CartBuy_Item">
                                <div className="CartBuy_Item_Info1">
                                    <img src={CardImage}></img>
                                    <h1>Carta Foda com um nome extremamente foda</h1>
                                </div>
                            </td>
                            <td className="CartBuy_Price">R$ 1000,00</td>
                            <td className="CartBuy_Quantity"><input value={1}></input></td>
                            <td className="CartBuy_PriceTotal">R$ 6000,00</td>
                        </tr>

                        
                    
                    </table>
                </div>

                <div className="buyInfo_section">
                    <div className="buyInfos_container">
                        <div className="buyInfo_Content">
                            <h1>SubTotal:</h1>
                            <h1>R$ 6000,00</h1>
                        </div>

                        <div className="buyInfo_Content">
                            <h1>Frete:</h1>
                            <h1>R$ 20,00</h1>
                        </div>

                        <div className="buyInfo_Content" id="buyinfo_valueTotal">
                            <h1>Valor Total:</h1>
                            <h1>R$ 6000,00</h1>
                        </div>

                        <div className="buttons_container_cardBuy">
                            <button>Pagar com PIX</button>
                            <button>Pagar com Cartão</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CarBuy;