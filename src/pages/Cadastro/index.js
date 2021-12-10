import { useEffect, useState } from "react";
import Imagem from "../../components/imagem";
import ImagemR from "../../components/imagem-responsiva";
import { api } from "../../services/api"
import { Container } from "./styles";

const Cadastro = () => {
    return (
        <Container>
            <nav>Navbar</nav>
            <p>Colocar formulário aqui</p>
            <Imagem />
            <ImagemR />
        </Container>
    )
}

export default Cadastro