import { Container } from "./styles"
import { useState } from "react"
import Button from "../button"
import { api } from "../../services/api"

const FormCategorias = () => {

    const [name, setName] = useState("")

    const addCategory = async (event) => {
        event.preventDefault()
    await api.post('categories/create', {
        category: {
            name: name
        }
    }).then((response) => {
        alert("A categoria foi criada com sucesso")
    }).catch((erro) => {
        alert("Ocorreu um erro")
    })
    }

    return (
        <Container>
            <form onSubmit={addCategory}>
                <input
                    placeholder="nome da categoria"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <Button type='submit' text={"Criar Categoria"}></Button>

            </ form>
        </Container>
    )
}

export default FormCategorias