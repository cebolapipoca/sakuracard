import react from "react";
import "./Login.css"
import InputSakura from "../Input/InputSakura";
import { AbrirLogin, AbrirCadastro } from "../Menu/Menu";
import Message, { AbrirMessageBox } from "../Alert_Message/Message";

function Logar()
{
    const InputS_Cadastro = document.getElementsByClassName('Input_Sakura')
    let ClientesStorage = JSON.parse(localStorage.getItem('Clientes'))
    let logado = false;

    ClientesStorage.forEach(Cliente => {
        if(InputS_Cadastro[0].value == Cliente.Email && InputS_Cadastro[1].value == Cliente.Senha)
        {
            AbrirMessageBox('Usuario logado com sucesso! :)')
            console.log('afirmativo')
            sessionStorage.setItem('ClienteId', Cliente.Id)
            logado = true
        }
    });

    if(logado == false)
    {
        AbrirMessageBox('ERRO AO LOGAR, LOGIN NÃO EXECUTADO :(')
    }
}

function Login()
{
    return (
        <div className="Login_Section" id="Login">
            <div className="Login_Box" >
                <h1 className="login_title">Acesse sua conta!</h1>
                <InputSakura label="Email" width="90%"/>
                <InputSakura label="Senha" width="90%"/>
                <button className="CadastroLogin_button" onClick={Logar}>Entrar</button>
                <h2>Não tem conta? <a onClick={()=>AbrirCadastro(true)}>crie agora</a></h2>

                <span className="exit_button" id="exit_button_login" onClick={()=>AbrirLogin(false)}>X</span>
            </div>
        </div>
    )
        

}

export default Login