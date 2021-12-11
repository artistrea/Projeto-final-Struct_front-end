import {Container} from './styles.js'
import EstrelaFavorito from "./../../imgs/estrela_favorito.png"
import EstrelaNaoFavorito from "./../../imgs/estrela_n_favorito.png"
import { useState } from 'react'
import { api } from '../../services/api.js'
import { useUserContext } from '../../context/useUserContext.js'
import { useEffect } from 'react'



const Prato = ({meal}) => {
    const {addRemoveFavorites, favorites} = useUserContext()
    useEffect(() => {
        setEstrela(EstrelaNaoFavorito)
        favorites.forEach((fav) => {(fav['id'] == meal['id']) && setEstrela(EstrelaFavorito)})
    }, [favorites])
    const [estrela, setEstrela] = useState('')
    return (
        <Container>
            <img id="estrela" onClick={() => addRemoveFavorites(estrela, setEstrela, meal.id) } src={estrela} alt="" />

            <div id="name"><p>{meal.name}</p></div>
            <img src={meal.picture_url ? "http://localhost:3000"+ meal.picture_url : "https://www.meme-arsenal.com/memes/71902ba85d52732dd7ccd7574004487d.jpg"} alt="foto"></img>
            <div id="description"><p>{meal.description}</p></div>
            
            <div id="price">R$ {(meal.price).toFixed(2)}</div>
        </Container>
        
    )
}

export { Prato }