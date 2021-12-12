import {
    Container
} from './styles'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../context/useUserContext'

const AdmSidebar = () => {
    const {user} = useUserContext()

    return (
        <Container>
            <div className="top">
                <p>Olá, {user.name}</p>
                <p>{user.email}</p>
                <Link to='/'>Alterar meus dados</Link>
                <Link to='/'>Sair</Link>
                <a href="">Alterar meus dados</a>
                <a href="">Sair</a>
            </div>

            <div className="bottom">
                <a href="">Pratos</a>
                <a href="">Criar prato</a>
                <a href="">Categorias</a>
                <a href="">Criar categoria</a>
            </div>
        </Container>
    )
}

export default AdmSidebar