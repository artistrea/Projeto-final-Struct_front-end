import { useEffect, useState } from "react";
import { api } from "../../services/api"
import LoginForm from "../../components/Formulario-login";
import AdmSidebar from "../../components/adm-sidebar";
import CadastroForm from "../../components/formulario-cadastro";
import UpdateUserForm from "../../components/formulario-alterar-dados";


const Testes = () => {

    return (
        <div>
           Página de testes
           <AdmSidebar user={{name: "artur", email: "art@art"}}/>
           <UpdateUserForm />
        </div>
    )
}

export default Testes