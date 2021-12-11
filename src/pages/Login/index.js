import { useEffect, useState } from "react";
import Imagem from "../../components/imagem";
import ImagemR from "../../components/imagem-responsiva";
import LoginForm from "../../components/Formulario-login";
import { api } from "../../services/api"
import { Container } from "./styles";

const Login = () => {
    return (
        <Container>
            <nav>.</nav>
            <LoginForm />
            <Imagem />
            <ImagemR />
        </Container>
    )
}

export default Login