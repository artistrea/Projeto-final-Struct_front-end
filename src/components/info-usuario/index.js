import { useUserContext } from "../../context/useUserContext"
import { Container, Grid } from "./styles"

const Info = () => {

    const user = useUserContext

    return (
        <>
            <Container>
                <p>Nome do usuário</p>
                <p>Email do usuário</p>
            </Container>
        </>
        
    )
}

export default Info