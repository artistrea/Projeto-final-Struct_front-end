import { useEffect, useState } from "react";
import Imagem from "../../components/imagem";
import ImagemR from "../../components/imagem-responsiva";
import LoginForm from "../../components/Formulario-login";
import { api } from "../../services/api"
import { Container } from "./styles";
import Button from "../../components/button";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Container>
            <LoginForm />
            <Imagem />
            <ImagemR />
        </Container>
    )
}

export default Login