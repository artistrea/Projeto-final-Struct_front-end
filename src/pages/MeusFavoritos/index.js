import { useEffect, useState } from "react";
import { api } from "../../services/api"
import { Container } from './styles'
import Filtro from "../../components/filtro-cardapio"
import { Pratos } from "../../components/pratos"
import { useUserContext } from "../../context/useUserContext";

const MeusFavoritos = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
      api.get('/categories/index').then((response) => {
        setCategories(response.data)
      })
    }, [])

    const {favorites} = useUserContext()

    const [filterBy, setFilterBy] = useState(-1)
    const [filteredMeals, setFilteredMeals] = useState(favorites)
    const filterMeals = () => {
      var filtered = []
      if (filterBy >= 0){
        favorites.forEach(function(meal){ (meal.category_id === filterBy) && filtered.push(meal) });
        return filtered}
      else {return favorites}
    }

    useEffect(() => {
      setFilteredMeals(filterMeals())
    }, [filterBy, favorites])

    return (
        <Container>
          <div className="spaceTop"></div>
          <Filtro categories={categories} setFilterBy={setFilterBy}/>
          <Pratos meals={filteredMeals} />
          <div className="footerspace"></div>
        </Container>
    )
}

export default MeusFavoritos