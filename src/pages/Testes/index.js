import { useEffect, useState } from "react";
import { api } from "../../services/api"
import LoginForm from "../../components/Formulario-login";
import AdmSidebar from "../../components/adm-sidebar";
import CadastroForm from "../../components/formulario-cadastro";
import UpdateUserForm from "../../components/formulario-alterar-dados";
import GridMeals from "./../../components/grid-meals/index"
import { Container } from "./styles";
import { useUserContext } from "../../context/useUserContext";
import FormCategorias from "../../components/form-categorias";
import FormPratos from "../../components/formPratos";

const Testes = () => {
    const {user} = useUserContext()

    return (
        <Container>
          <FormPratos />
        </Container>
    )
}

export default Testes