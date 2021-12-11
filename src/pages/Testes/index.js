import { useEffect, useState } from "react";
import { api } from "../../services/api"
import LoginForm from "../../components/Formulario-login";
import AdmSidebar from "../../components/adm-sidebar";
import CadastroForm from "../../components/formulario-cadastro";
import UpdateUserForm from "../../components/formulario-alterar-dados";
import GridMeals from "./../../components/grid-meals/index"
import { Container } from "./styles";

const Testes = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
      api.get('/meals/index').then((response) => {
        setMeals(response.data)
      })
    }, [])
    return (
        <Container>
            <LoginForm />
            <CadastroForm />
            <UpdateUserForm /> 
        </Container>
    )
}

export default Testes