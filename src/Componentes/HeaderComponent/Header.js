import React from "react";
import "./HeaderStyle.css"

import SakuraCard_Icon from "../../imagens/icons/SakuraCard_Icon.svg"
import BuyCar_Icon from "../../imagens/icons/BuyCar_Icon.svg"
import Menu_Icon from "../../imagens/icons/MenuSakuraCard_Icon.svg"
import Lupa_Icon from '../../imagens/icons/lupa_icon.svg'

function Header()
{
    return (
        
            <header>
                <div className="header_content">
                    <div className="title_header">
                        <img id="sakura_icon" src={SakuraCard_Icon}></img>
                        <h1 id="">Sakura Cards</h1>
                    </div>
                    
                    <div className="imagens_header">
                        <img src={BuyCar_Icon} id="buycar_button"></img>
                        <img src={Menu_Icon} id="menu_button"></img>
                    </div>
                </div>

                <div className="header_searchBar">
                    <input type="text"></input>
                    <button><img src={Lupa_Icon}></img></button>
                </div>
            </header>
    );
}

export default Header;