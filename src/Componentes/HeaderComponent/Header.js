import React from "react";
import "./HeaderStyle.css"

import SakuraCard_Icon from "../../imagens/icons/SakuraCard_Icon.svg"
import BuyCar_Icon from "../../imagens/icons/BuyCar_Icon.svg"
import Menu_Icon from "../../imagens/icons/MenuSakuraCard_Icon.svg"
import User_Pink from '../../imagens/icons/user_pink_icon.svg'
import Menu from "../Menu/Menu";

    document.addEventListener('scroll', (event)=>{
        const headerSakura = document.getElementById('headerSakura')
        if (window.scrollY > 0)
        {
            headerSakura.style.backgroundColor = 'rgba(255, 255, 255, 0.397)'
            headerSakura.style.boxShadow = '1px 4px 6px gray'
        }
        else {
             headerSakura.style.backgroundColor = 'transparent'
            headerSakura.style.boxShadow = 'none'
        }
    })

    export function AbrirMenu(abrir)
    {
        const Menu = document.getElementById('SakuraMenu')
        console.log('ABRIU')
        if(abrir)
        {
            Menu.classList.add('on_menu')
        }
        else
        {
            Menu.classList.remove('on_menu')
        }
    }

function Header()
{

    return (
        <>
            <header id="headerSakura">
                <div className="header_content">
                    <div className="title_header">
                        <img id="sakura_icon" src={SakuraCard_Icon}></img>
                        <h1 id=""><a href="/" style={{color: "#FDBDBD"}}>Sakura Cards</a></h1>
                    </div>
                    
                    <div className="imagens_header">
                        <ul className="navBar_header">
                            <a href="/#/Favorites">Favoritos</a>
                            <a href="/#/MyOrder">Meus Pedidos</a>
                            <a>Cartas</a>
                            <a>Desenvolvedores</a>
                        </ul>

                        <a href="/#/CarBuy"><img src={BuyCar_Icon} id="buycar_button"></img></a>
                        <img src={Menu_Icon} onClick={()=>AbrirMenu(true)}  id="menu_button"></img>
                        <img src={User_Pink} id="user_button"></img>
                    </div>
                </div>
            </header>

            <Menu/>
        </>
    );
}

export default Header;