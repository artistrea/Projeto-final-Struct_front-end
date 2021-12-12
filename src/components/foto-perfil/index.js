import { useUserContext } from "../../context/useUserContext"
import { Container, Grid } from "./styles"

const Perfil = () => {

    const {user} = useUserContext()

    return (
        <>
            <Container>
                <img className="foto" src="https://st2.depositphotos.com/3957801/5642/i/600/depositphotos_56423065-stock-photo-bacon-burger.jpg" alt="foto de perfil"></img>
            </Container>
        </>
        
    )
}

export default Perfil