import { useState } from "react"
import { Container } from "./styles"
import { api } from "../../services/api"
import Button from "../button"
import { useUserContext } from "../../context/useUserContext"

const FormPratos = () => {

    const {user} = useUserContext()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")


    const addMeal = async (event) => {
        event.preventDefault()
    await api.post('/meals/create', {
        meal: {
            name: name,
            description: description,
            price: price,
            category_id: category
        }},{
        headers:{
            'X-User-Token': user['authentication_token'],
            'X-User-Email': user['email']
        }}
        ).then((response) => {
        alert("O prato foi criado com sucesso")
        }).catch((erro) => {
        alert("Ocorreu um erro")
    })
    }

    return (
        <Container>
            <form onSubmit={addMeal}>
                <input
                    placeholder="nome"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    placeholder="descrição"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <input
                    type="number"
                    step="0.01"
                    placeholder="preço"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
                <input
                    placeholder="id da categoria"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
                <Button type='submit' text={"Criar Prato"}></Button>
            </form>
        </Container>
    )
}

export default FormPratos