import { useEffect, useState } from "react";
import { api } from "../../services/api"

import Filtro from "../../components/filtro-cardapio"
import { Pratos } from "../../components/pratos"

const MeusFavoritos = () => {

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

    // const [favorites, setFavorites] = useState(user.favorites)
    // pegando o user do contexto

    const [filterBy, setFilterBy] = useState(-1)
    const [filteredMeals, setFilteredMeals] = useState(meals)
    const filterMeals = () => {
      var filtered = []
      if (filterBy >= 0){
        meals.forEach(function(meal){ (meal.category_id === filterBy) && filtered.push(meal) });
        return filtered}
      else {return meals}
    }

    useEffect(() => {
      setFilteredMeals(filterMeals())
    }, [filterBy])

    return (
        <div>
          <nav>Navbar</nav>
          <Filtro categories={categories} setFilterBy={setFilterBy}/>
          <Pratos meals={filteredMeals} />
        </div>
    )
}

export default MeusFavoritos