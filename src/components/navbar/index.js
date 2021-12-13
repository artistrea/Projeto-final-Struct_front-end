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
                <Link to="/">Home</Link>
                <Link to="/cardapio">Cardápio</Link>
                <Link to="/meusFavoritos"> Meus Favoritos </ Link>
            </div>
            <div className='nav-right nav-list'>
                {
                    (user)?
                    <Link to='/user'>Perfil</Link>
                    :
                    <Link to='/login'>Entrar</Link>   
                }
            </div>
            
        </Container>
    );
}

export default Navbar