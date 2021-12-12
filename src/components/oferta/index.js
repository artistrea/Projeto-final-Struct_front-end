import { Container } from "./styles"

const Oferta = ({text, src}) => {
    return (
        <Container>
            
            <img src={src} alt="oferta"></img>

            <p>{text}</p>
            
        </Container>
    )
}

export default Oferta