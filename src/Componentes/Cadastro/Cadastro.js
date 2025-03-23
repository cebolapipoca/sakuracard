import react from "react";
import '../Login/Login.css'
import InputSakura from "../Input/InputSakura";
import { AbrirCadastro } from "../Menu/Menu";
import { AbrirMessageBox } from "../Alert_Message/Message";

function Cadastro()
{
    
    
    if(localStorage.getItem('Clientes') == null)
    {
        localStorage.setItem('Clientes', JSON.stringify([]))
    }

    function CadastrarCliente()
    {
        const InputS_Cadastro = document.getElementsByClassName('Input_Sakura')
        
        let OldData =  JSON.parse(localStorage.getItem("Clientes"))
        
        let Infos = {
            'Id': CountClient() + 1,
            'Nome': InputS_Cadastro[2].value,
            'CPF': InputS_Cadastro[3].value,
            'Estado': InputS_Cadastro[4].value,
            'Cidade': InputS_Cadastro[5].value,
            'Bairro': InputS_Cadastro[6].value,
            'Número': InputS_Cadastro[7].value,
            'Email': InputS_Cadastro[8].value,
            'Senha': InputS_Cadastro[9].value,
            'Pedidos': [],
            'Favoritos': [],
            'Carrinho': [],
        }

        console.log(OldData)
        OldData.push(Infos)
        localStorage.setItem('Clientes', JSON.stringify(OldData))
        AbrirMessageBox("Usuário cadastrado com sucesso!")
    }

    function CountClient()
    {
        let ClientesStorage = JSON.parse(localStorage.getItem('Clientes'));
        
        return ClientesStorage.length
    }

    function ApagarDatabase()
    {
        localStorage.removeItem('Clientes');
    }


    return (
        <div className="Login_Section" id="Cadastro">
            <div className="Login_Box">
                <h1 className="login_title">Crie sua conta agora!</h1>

                <InputSakura label="Nome Completo" InputNome="Cadastro_Sakura" label2="CPF" doubled={true}/>
                <InputSakura label="Estado" InputNome="Cadastro_Sakura" label2="Cidade" width="50%" width2="50%" doubled={true}/>
                <InputSakura label="Bairro" InputNome="Cadastro_Sakura" label2="Número" width="50%" width2="50%" doubled={true}/>
                <InputSakura label="Email"  InputNome="Cadastro_Sakura" width="90%"/>
                <InputSakura label="Senha"  InputNome="Cadastro_Sakura" width="90%"/>
                <button className="CadastroLogin_button" onClick={CadastrarCliente}>Criar Conta</button>

                <span className="exit_button" onClick={()=>AbrirCadastro(false)}>X</span>
            </div>

        </div>
    )
}

export default Cadastro