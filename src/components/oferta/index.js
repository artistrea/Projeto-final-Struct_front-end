import { Container } from "./styles"

const Oferta = ({src}) => {
    return (
        <Container>
            
            <img src={src} alt="oferta"></img>

            <p>Texto</p>
            
        </Container>
    )
}

export default Oferta