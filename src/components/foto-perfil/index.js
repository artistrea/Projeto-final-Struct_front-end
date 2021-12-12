import { useUserContext } from "../../context/useUserContext"
import { Container, Grid } from "./styles"

const Perfil = () => {

    const {user} = useUserContext()

    return (
        <>
            <Container>
                <img className="foto" src={"http://localhost:3000/" + user.profile_picture_url} alt="foto de perfil"></img>
                <p>{user.name}</p>
            </Container>
        </>
        
    )
}

export default Perfil

// https://st2.depositphotos.com/3957801/5642/i/600/depositphotos_56423065-stock-photo-bacon-burger.jpg