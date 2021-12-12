import Cookies from "js-cookie"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import { useUserContext } from "../../context/useUserContext"
import Button from "../button"
import { Container, Grid } from "./styles"


const Info = () => {

    const {user} = useUserContext()

    return (
        <>
            <Container>
                <p>{user.name}</p>
                <p>{user.email}</p>
                {/*<Link to="/formUsuario">Alterar meus dados</Link>*/}
                <Button text="Sair" />
            </Container>
        </>
        
    )
}

export default Info