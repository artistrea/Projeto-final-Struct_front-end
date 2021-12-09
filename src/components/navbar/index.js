import { Container } from "./styles"

const Navbar = (props) => {
    return (
        <Container>
            <div class='nav-left'>
                <img src="" alt="logo"/>
            </div>
            <div class='nav-middle'>
                <a href="#">Início</a>
                <a href="#">Cardápio</a>
                <a href="#">Restaurantes</a>
            </div>
            <div class='nav-right'>
                <a href="#">{props.text}</a>
            </div>
        </Container>
    );
}

export default Navbar