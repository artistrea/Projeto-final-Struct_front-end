import Cookies from "js-cookie"
import { useUserContext } from "../../context/useUserContext"
import Button from "../button"
import { Container, Grid } from "./styles"


const Info = () => {

    const {user} = useUserContext()

    return (
        <>
            <Container>
                <p>Nome do usuário</p>
                <p>Email do usuário</p>
                {/*<Link to="/formUsuario">Alterar meus dados</Link>*/}
                <Button text="Sair" onClick={Cookies.remove("loggedinuser")}/>
            </Container>
        </>
        
    )
}

export default Info