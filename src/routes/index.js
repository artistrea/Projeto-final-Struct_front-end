import { Route, Switch } from "react-router"
import { useUserContext } from "../context/useUserContext"
import AdminPage from "../pages/AdminPage"
import Cadastro from "../pages/Cadastro"
import Cardapio from "../pages/Cardapio"
import Home from "../pages/Home"
import Login from "../pages/Login"
import MeusFavoritos from "../pages/MeusFavoritos"
import Testes from "../pages/Testes"
import User from "../pages/Usuario"

const Routes = () => {
    const {user} = useUserContext()
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cardapio' component={Cardapio} />
            {   user &&
                user['is_admin'] && 
                <Route path='/admin' component={AdminPage} />
            }
            
            {/* Rota de testes, apagar na versão final */}
            <Route path='/testes' component={Testes} />
            <Route path='/login' component={Login} />
            
            <Route path='/cadastrar' component={Cadastro} />
            {user &&
                <Route path='/user' component={User} />
            }
            {/* <Route path='/formPrato' component={} />
            <Route path='/formCategoria' component={} />
            <Route path='/formUsuario' component={} /> */}
            {user &&
                <Route path='/meusFavoritos' component={MeusFavoritos} />
            }
            {/* <Route path='/meusFavoritos' component={MeusFavoritos} /> */}
            <Route path='*' component={Home} />
        </Switch>
    )
}

export default Routes