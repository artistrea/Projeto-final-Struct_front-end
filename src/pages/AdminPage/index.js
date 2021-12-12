import AdmSidebar from "../../components/adm-sidebar"
import GridCategories from "../../components/grid-categories"
import GridMeals from "../../components/grid-meals"
import { useState, useEffect } from "react"
import { api } from "../../services/api"

const AdminPage = () => {

    const [categories, setCategories] = useState([])
    const [meals, setMeals] = useState([])

    useEffect(() => {
      api.get('/categories/index').then((response) => {
        setCategories(response.data)
      })
      api.get('/meals/index').then((response) => {
        setMeals(response.data)
      })
    }, [])


    return (
        <div>
            <AdmSidebar />
            <GridMeals meals={meals}/>
            <GridCategories categories={categories}/>
        </div>
    )
}

export default AdminPage