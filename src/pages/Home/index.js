import Ofertas from "../../components/ofertas"
import Ofertinhas from "../../components/ofertinhas"
import Ofertona from "../../components/ofertona"
import { Container } from "./styles"


const Home = () => {
    return (
        <Container>
            <nav>Navbar</nav>
            <Ofertona />
            <Ofertas />
            <Ofertinhas />
        </Container>
    )
}

export default Home