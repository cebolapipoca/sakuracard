import React from "react";
import "./Button.css"

function Button(props)
{
    return (
        <button className="Sakura_Button">
            {props.ButtonText}
        </button>
    )
}

export default Button