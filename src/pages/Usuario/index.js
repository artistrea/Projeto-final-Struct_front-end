import Perfil from "../../components/foto-perfil"
import Info from "../../components/info-usuario"
import { Container } from "./styles"
import { useState } from "react"
import { useHistory } from "react-router-dom"


const User = () => {
        

    return (
        <Container>
            <Perfil />
            <Info />
        </ Container>
    )
}

export default User