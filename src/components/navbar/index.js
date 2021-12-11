import { Container } from "./styles"
import Logo from "./../../imgs/Logo.png"
import navbarImg from "./../../imgs/navbarImg.jpg"
import { useUserContext } from "../../context/useUserContext"
import { Link } from "react-router-dom"

const Navbar = (props) => {
    const {user} = useUserContext()
    return (
        <Container >
            
            <div className='nav-left'>
                <img src={Logo} alt="logo"/>
            </div>
            <div className='nav-middle nav-list'>
                <Link to="/">Ofertas</Link>
                <Link to="/cardapio">Cardápio</Link>
                <a href="#">Restaurantes</a>
            </div>
            <div className='nav-right nav-list'>
                <a href="#">{user? "Perfil" : "Entrar"}</a>
            </div>
            
        </Container>
    );
}

export default Navbar