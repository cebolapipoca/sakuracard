
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
                    <th>Idioma</th>
                    <th>Qualidade</th>
                    <th>Extra</th>
                    <th>Estoque</th>
                    <th>Preço</th>
                </tr>
                <tr className="table_row_price">
                    <td><img src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg"></img></td>
                    <td>SP</td>
                    <td>Foil</td>
                    <td>2 unid</td>
                    <td>129,00 R$</td>
                    <td><input/></td>
                    <td><img src={BuyCar} id="buycar_CardBuy"></img></td>
                </tr>
                <tr className="table_row_price">
                    <td><img src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg"></img></td>
                    <td>SP</td>
                    <td>Foil</td>
                    <td>2 unid</td>
                    <td>129,00 R$</td>
                    <td><input/></td>
                    <td><img src={BuyCar} id="buycar_CardBuy"></img></td>
                </tr>
                <tr className="table_row_price">
                    <td><img src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg"></img></td>
                    <td>SP</td>
                    <td>Foil</td>
                    <td>2 unid</td>
                    <td>129,00 R$</td>
                    <td><input/></td>
                    <td><img src={BuyCar} id="buycar_CardBuy"></img></td>
                </tr>
            </table>
        </div>
    </div>
    )
}

export default CardBuy;