import { useEffect, useState } from "react";
import { api } from "../../services/api"

import Filtro from "../../components/filtro-cardapio"
import { Pratos } from "../../components/pratos"

const Cardapio = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
      api.get('/categories/index').then((response) => {
        setCategories(response.data)
      })
    }, [])


    const [meals, setMeals] = useState([])
    useEffect(() => {
      api.get('/meals/index').then((response) => {
        setMeals(response.data)
      })
    }, [])

    return (
        <div>
            <Filtro categories={categories} />
            <Pratos meals={meals} />
        </div>
    )
}

export default Cardapio