
import React from "react";
import "./CardBuy.css"
import BuyCar from "../../imagens/icons/BuyCar_Icon.svg"

function CardBuy()
{
    return (
        
    <div className="CarBuy_Section">
        <div className="CardBuy_Container">
            <div className="ShowCardImage">
                <img src="https://www.pokemon.com/static-assets/content-assets/cms2-pt-br/img/cards/web/SV03/SV03_PT-BR_135.png"></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgjvHVKQ4LFkA0tiy0MA4PSJXG7g26FpRjw&s"></img>
            </div>

            <table>
                <tr className="table_header">
                    <th className="table_header_cb">Idioma</th>
                    <th className="table_header_cb">Qualidade</th>
                    <th className="table_header_cb">Extra</th>
                    <th className="table_header_cb">Estoque</th>
                    <th className="table_header_cb">Preço</th>
                </tr>
                <tr className="table_row_price table_row_cb">
                    <td className="table_data_cb"><img src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg"></img></td>
                    <td className="table_data_cb">SP</td>
                    <td className="table_data_cb">Foil</td>
                    <td className="table_data_cb">2 unid</td>
                    <td className="table_data_cb">129,00 R$</td>
                    <td className="table_data_cb"><input className="input_quantity_cb"/></td>
                    <td className="table_data_cb"><img src={BuyCar} id="buycar_CardBuy"></img></td>
                </tr>

                <tr className="table_row_price table_row_cb">
                    <td className="table_data_cb"><img src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg"></img></td>
                    <td className="table_data_cb">SP</td>
                    <td className="table_data_cb">Foil</td>
                    <td className="table_data_cb">2 unid</td>
                    <td className="table_data_cb">129,00 R$</td>
                    <td className="table_data_cb"><input className="input_quantity_cb"/></td>
                    <td className="table_data_cb"><img src={BuyCar} id="buycar_CardBuy"></img></td>
                </tr>

                <tr className="table_row_price table_row_cb">
                    <td className="table_data_cb"><img src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg"></img></td>
                    <td className="table_data_cb">SP</td>
                    <td className="table_data_cb">Foil</td>
                    <td className="table_data_cb">2 unid</td>
                    <td className="table_data_cb">129,00 R$</td>
                    <td className="table_data_cb"><input className="input_quantity_cb"/></td>
                    <td className="table_data_cb"><img src={BuyCar} id="buycar_CardBuy"></img></td>
                </tr>
            </table>
        </div>
    </div>
    )
}

export default CardBuy;