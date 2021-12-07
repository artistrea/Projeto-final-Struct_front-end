import {Container} from './styles.js'
import EstrelaFavorito from "./../../imgs/estrela_favorito.png"
import EstrelaNaoFavorito from "./../../imgs/estrela_n_favorito.png"
import { useState } from 'react'

const CliqueEstrela = (estrela,setEstrela) => {
    
    (estrela == EstrelaFavorito) ? setEstrela(EstrelaNaoFavorito) : setEstrela(EstrelaFavorito);
    // Chamada pra api favoritar/desfavoritar usando o current user
}

const CliquePrato = () => {
    //abrir popup do prato
}

const Prato = ({name, imageUrl, description}) => {
    const [estrela, setEstrela] = useState(EstrelaFavorito)
    const [clicado, setClicado] = useState(false)
    return (
        <Container onClick={() => CliquePrato(clicado, setClicado) }>
            <img onClick={() => CliqueEstrela(estrela,setEstrela) } id="estrela" src={estrela} alt="" />

            <div id="name"><p>{name}</p></div>
            <img src={imageUrl} alt="foto"></img>
            <div id="description"><p>{description}</p></div>
            
            <div id="prato_aberto"></div>
        </Container>
        
    )
}

export { Prato, CliquePrato }