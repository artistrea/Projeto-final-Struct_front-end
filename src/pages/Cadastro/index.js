import { useEffect, useState } from "react";
import CadastroForm from "../../components/formulario-cadastro";
import Imagem from "../../components/imagem";
import ImagemR from "../../components/imagem-responsiva";
import { api } from "../../services/api"
import { Container } from "./styles";

const Cadastro = () => {
    return (
        <Container>
            <CadastroForm />
            <Imagem />
            <ImagemR />
        </Container>
    )
}

export default Cadastro