import Ofertas from "../../components/ofertas"
import Ofertinhas from "../../components/ofertinhas"
import Ofertona from "../../components/ofertona"
<<<<<<< HEAD

const Home = () => {
    return (
        <div>
            <Ofertona />
            <Ofertas />
            <Ofertinhas />
        </div>
=======
import { Container } from "./styles"


const Home = () => {
    return (
        <Container>
            <nav>Navbar</nav>
            <Ofertona />
            <Ofertas />
            <Ofertinhas />
        </Container>
>>>>>>> 5206c47fe79d4385350f8a3b983d260abcb8cd0c
    )
}

export default Home