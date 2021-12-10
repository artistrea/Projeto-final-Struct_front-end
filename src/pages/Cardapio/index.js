import { useEffect, useState } from "react";
import { api } from "../../services/api"

import Filtro from "../../components/filtro-cardapio"
import { Pratos } from "../../components/pratos"

const Cardapio = () => {
    const [categories, setCategories] = useState([])
<<<<<<< HEAD
=======
    const [meals, setMeals] = useState([])
>>>>>>> 5206c47fe79d4385350f8a3b983d260abcb8cd0c

    useEffect(() => {
      api.get('/categories/index').then((response) => {
        setCategories(response.data)
      })
<<<<<<< HEAD
    }, [])

    const [meals, setMeals] = useState([])
    useEffect(() => {
      api.get('/meals/index').then((response) => {
        setMeals(response.data)
      })
    }, [])

    const [filterBy, setFilterBy] = useState(-1)
    const [filteredMeals, setFilteredMeals] = useState(meals)
=======
      api.get('/meals/index').then((response) => {
        let arr = response.data
        setFilteredMeals(arr)
        setMeals(arr)
      })
    }, [])

    

    const [filterBy, setFilterBy] = useState(-1)
    const [filteredMeals, setFilteredMeals] = useState(meals)

>>>>>>> 5206c47fe79d4385350f8a3b983d260abcb8cd0c
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
<<<<<<< HEAD
            <Filtro categories={categories} setFilterBy={setFilterBy}/>
            <Pratos meals={filteredMeals} />
=======
          <nav>Navbar</nav>
          <Filtro categories={categories} setFilterBy={setFilterBy}/>
          <Pratos meals={filteredMeals} />
>>>>>>> 5206c47fe79d4385350f8a3b983d260abcb8cd0c
        </div>
    )
}

export default Cardapio