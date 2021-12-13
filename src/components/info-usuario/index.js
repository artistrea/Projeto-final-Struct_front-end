import Cookie from "js-cookie"
import { useHistory } from "react-router-dom"
import { useUserContext } from "../../context/useUserContext"
import { Link } from "react-router-dom"
import { Container, Grid } from "./styles"

const Info = () => {

    const {user, setUser} = useUserContext()
    const history = useHistory()
    const redirect = () => {
        history.push('/login')
    }
    return (
        <>
            <Container>
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
                <Link to="/alterarDados">Alterar meus dados</Link>
                <a onClick={ (e) => {e.preventDefault(); Cookie.remove("loggedinuser"); setUser(undefined); redirect()} }>Sair</a>
            </Container>
        </>
        
    )
}

export default Info