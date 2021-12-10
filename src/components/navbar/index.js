import { Container } from "./styles"
import Logo from "./../../imgs/Logo.png"
import navbarImg from "./../../imgs/navbarImg.jpg"

const Navbar = (props) => {
    return (
        <Container >
            
            <div class='nav-left'>
                <img src={Logo} alt="logo"/>
            </div>
            <div class='nav-middle nav-list'>
                <a href="#">Início</a>
                <a href="#">Cardápio</a>
                <a href="#">Restaurantes</a>
            </div>
            <div class='nav-right nav-list'>
                <a href="#">{props.text}</a>
            </div>
            
        </Container>
    );
}

export default Navbar