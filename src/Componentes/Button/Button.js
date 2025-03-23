import React, { useContext } from "react";
import "./Button.css"
import { DataContext } from "../../App";




function Button(props)
{

    const teste = useContext(DataContext)
    console.log('botão: ' + teste)

    return (
        <button className="Sakura_Button">
            {props.ButtonText}
        </button>
    )
}

export default Button