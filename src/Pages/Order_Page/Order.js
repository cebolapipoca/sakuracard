import React from "react";
import './Order.css'
import Header from "../../Componentes/HeaderComponent/Header";
import OrderComponent from "../../Componentes/Order/OrderComponent";

export default function Order()
{

    function CarregarPedidos()
    {
        let session = sessionStorage.getItem('ClienteId');
        let Clientes = JSON.parse(localStorage.getItem('Clientes'))
        let Pedidos = []

        try 
        {
            Clientes.forEach(Cliente => {
                if(Cliente.Id == session)
                {
                  Pedidos = Cliente.Pedidos
                }
            });
        }
        catch
        {

        }

        return Pedidos
    }

    if(sessionStorage.getItem('ClienteId') != null || sessionStorage.getItem('ClienteId') != undefined )
    {
        return (
            <div>
                <Header/>
               <div className="Order_Title"> 
                    <h1>Meus Pedidos</h1>
                    <img/>
               </div>
    
               <div className="myorder_list">
                {
                    CarregarPedidos().map((pedido)=>(
                        <OrderComponent name={pedido.name} price={pedido.price} image={pedido.image}/>
                    ))
                }
               </div>
            </div>
        )
    }

    
}