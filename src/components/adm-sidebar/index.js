import {
    Container
} from './styles'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../context/useUserContext'
import Cookie from 'js-cookie'
import { useHistory } from 'react-router-dom'

const AdmSidebar = () => {

    const history = useHistory()
    const redirect = () => {
        history.push('/login')
    }
    const {user, setUser} = useUserContext()

    return (
        <Container>
            <div className="top">
                <p>Olá, {user.name}</p>
                <p>{user.email}</p>
                <Link to='/alterarDados'>Alterar meus dados</Link>
                <a onClick={ (e) => {e.preventDefault(); Cookie.remove("loggedinuser"); setUser(undefined); redirect()} }>Sair</a>
                {/* <Link to='/'>Sair</Link>
                <a href="">Sair</a> */}
            </div>

            <div className="bottom">
                <Link to="/admPratos">Pratos</Link>
                <Link to="/formPrato">Criar prato</Link>
                <Link to="/admCategorias">Categorias</Link>
                <Link to="/formCategoria">Criar categorias</Link>
            </div>
        </Container>
    )
}

export default AdmSidebar