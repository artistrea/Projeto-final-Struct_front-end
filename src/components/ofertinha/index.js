import { Container } from "./styles"

const Ofertinha = ({src, text}) => {
    return (
        <Container>
            <img src={src} alt="oferta"></img>

            <p>{text}</p>
        </Container>
    )
}

export default Ofertinha