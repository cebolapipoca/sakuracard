import React from "react";
import './OrderComponent.css'


export default function OrderComponent(props)
{
    return (
        <details className="Order">
            <summary>

            <h1 className="entrega">Seu produto será entregue até dia 16/03</h1>
            <div className="order_content">
                <div className="image_container">
                    <img className="image_card_order" src={props.image}></img>
                </div>

                <div>
                    <div className="Order_1">
                        <h1>{props.name}</h1>
                        <h2>{props.price}</h2>
                    </div>

                    <div className="Order_2">
                        <h3>Quantidade: 1</h3>
                        <h3>Qualidade: SP</h3>
                        <h3>Foil</h3>
                        <h3></h3>
                    </div>
                </div>

                <div className="order_buttons">
                    <button>Rastrear Pedido</button>
                    <button>Cancelar ou Trocar Pedido</button>
                </div>
            </div>
            </summary>
        </details>
    )
}
