import Perfil from "../../components/foto-perfil"
import Info from "../../components/info-usuario"
import { Container } from "./styles"
import { useState } from "react"

const User = () => {

    const [user, setUser] = useState([])
    

    return (
        <Container>
            <nav>.</nav>
            <Perfil />
            <Info />
        </ Container>
    )
}

export default User