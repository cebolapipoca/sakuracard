import react from "react";
import '../Login/Login.css'
import InputSakura from "../Input/InputSakura";

function Cadastro()
{
    return (
        <div className="Login_Section" id="Cadastro">
            <div className="Login_Box">
                <h1 className="login_title">Crie sua conta agora!</h1>

                <InputSakura label="Nome Completo" label2="CPF" doubled={true}/>
                <InputSakura label="Estado" label2="Cidade" width="50%" width2="50%" doubled={true}/>
                <InputSakura label="Bairro" label2="Número" width="50%" width2="50%" doubled={true}/>
                <InputSakura label="Email" width="90%"/>
                <InputSakura label="Senha" width="90%"/>
                <button className="CadastroLogin_button">Entrar</button>
            </div>
        </div>
    )
}

export default Cadastro