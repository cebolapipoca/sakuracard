import react from "react";
import './Menu.css'
import heart_icon from '../../imagens/icons/heart_icon.svg'
import bag_icon from '../../imagens/icons/bag_icon.svg'
import card_icon from '../../imagens/icons/card_icon.svg'
import shield_icon from '../../imagens/icons/shield_icon.svg'
import programming_icon from '../../imagens/icons/Programming_icon.svg'
import gear_icon from '../../imagens/icons/gear_icon.svg'
import user_icon from '../../imagens/icons/user_icon.svg'
import arrow_icon from '../../imagens/icons/arrow_left_icon.svg'
import Login from '../Login/Login'
import Cadastro from '../Cadastro/Cadastro'
import { AbrirMenu } from "../HeaderComponent/Header";


   export function AbrirLogin(abrir)
   {
        const LoginMenu = document.getElementById('Login')

        if(abrir)
        {
            LoginMenu.style.display = 'flex'
            
        }
        else
        {
            LoginMenu.style.display = 'none'
        }

        AbrirMenu(false)
   }

   export function AbrirCadastro(abrir)
   {

    const CadastroMenu = document.getElementById('Cadastro')

        if(abrir)
        {
            CadastroMenu.style.display = 'flex'
        }
        else
        {
            CadastroMenu.style.display = 'none'
        }

        AbrirMenu(false)
        AbrirLogin(false)
   }


function Menu()
{
    return (
        <div>
            <Login/>
            <Cadastro/>
            <menu className="SakuraMenu" id="SakuraMenu">
                <div className="MenuContent">
                    <div className="user_box_menu">
                        <img src={user_icon}/>
                        
                        <div className="user_box_buttons">
                            <button onClick={()=>AbrirLogin(true)} >Entrar</button>
                            <button onClick={()=>AbrirCadastro(true)}>Criar Conta</button>
                        </div>
                    </div>

                    <ul>
                        <a href="/Favorites"><img src={heart_icon}/>Favoritos</a>
                        <a><img src={bag_icon} />Meus Pedidos</a>
                        <a><img src={card_icon} />Cartas</a>
                        <a><img src={shield_icon}/>Poaticas de privacidade</a>
                        <a><img src={programming_icon}/>Desenvolvedores</a>
                        <a><img src={gear_icon}/>Configurações</a>
                    </ul>
                </div>

                <img src={arrow_icon} id="arrow_exit_menu" onClick={()=>AbrirMenu(false)}/>
            </menu>
        </div>
    )
}

export default Menu
