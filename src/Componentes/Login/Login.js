import react from "react";
import "./Login.css"
import InputSakura from "../Input/InputSakura";

function Login()
{
    return (
        <div className="Login_Section" id="Login">
            <div className="Login_Box" >
                <h1 className="login_title">Acesse sua conta!</h1>

                <InputSakura label="Email" width="90%"/>
                <InputSakura label="Senha" width="90%"/>
                <button className="CadastroLogin_button">Entrar</button>
                <h2>Não tem conta? <a href="https://youtube.com">crie agora</a></h2>
            </div>
        </div>
    )
        

}

export default Login