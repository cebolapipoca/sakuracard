import React, { Children } from "react";
import './GenericPage.css'
import Header from "../HeaderComponent/Header";

export default function GenericPage({children, title})
{
    return (
        <div className="genericContainer">
           <Header/>

           <div className="generic_Content">
                <h1>{title}</h1>
                <div className="genericPage_Text">{children}</div>
            </div>
        </div>
    )
}