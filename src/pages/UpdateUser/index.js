import { Container } from "./styles"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import UpdateUserForm from "../../components/formulario-alterar-dados"


const UpdateUser = () => {
        

    return (
        <Container>
            <UpdateUserForm />
        </ Container>
    )
}

export default UpdateUser