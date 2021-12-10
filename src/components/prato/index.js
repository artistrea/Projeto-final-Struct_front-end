import {Container} from './styles.js'
import EstrelaFavorito from "./../../imgs/estrela_favorito.png"
import EstrelaNaoFavorito from "./../../imgs/estrela_n_favorito.png"
import { useState } from 'react'
import { api } from '../../services/api.js'

const CliqueEstrela = async (estrela, setEstrela, meal_id) => {
    if(estrela === EstrelaFavorito) {
        setEstrela(EstrelaNaoFavorito);
        await api.create(`/favorites/delete/${meal_id}`)
    }
    else{ 
        setEstrela(EstrelaFavorito)
        await api.create("/favorites/create", {
            favorite: {
                meal_id: meal_id
            }
        })
    }
}


const Prato = ({meal}) => {
    const user = {favorites: [meal]}
    const ehFavorito = () => { if((user.favorites).includes(meal)){return EstrelaFavorito} else{return EstrelaNaoFavorito} }
    const [estrela, setEstrela] = useState(ehFavorito)
    return (
        <Container>
            <img id="estrela" onClick={() => CliqueEstrela(estrela, setEstrela, meal.id) } src={estrela} alt="" />

            <div id="name"><p>{meal.name}</p></div>
            <img src={meal.picture_url ? "http://localhost:3000"+ meal.picture_url : "https://www.meme-arsenal.com/memes/71902ba85d52732dd7ccd7574004487d.jpg"} alt="foto"></img>
            <div id="description"><p>{meal.description}</p></div>
            
            <div id="price">R$ {(meal.price).toFixed(2)}</div>
        </Container>
        
    )
}

export { Prato }