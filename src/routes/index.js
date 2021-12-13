import { Route, Switch } from "react-router"
import { useUserContext } from "../context/useUserContext"
import AdminPage from "../pages/AdminPage"
import Cadastro from "../pages/Cadastro"
import Cardapio from "../pages/Cardapio"
import CategoriasAdmin from "../pages/CategoriasAdm"
import CreateCategory from "../pages/CriarCategoria"
import CreateMeal from "../pages/CriarPrato"
import Home from "../pages/Home"
import Login from "../pages/Login"
import MeusFavoritos from "../pages/MeusFavoritos"
import PratosAdmin from "../pages/PratosAdm"
import UpdateUser from "../pages/UpdateUser"
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
            {   user &&
                user['is_admin'] && 
                <Route path='/formPrato' component={CreateMeal} />   
            }
            {   user &&
                user['is_admin'] && 
                <Route path='/formCategoria' component={CreateCategory} />
            }
            {   user &&
                user['is_admin'] && 
                <Route path='/admPratos' component={PratosAdmin} />
            }
            {   user &&
                user['is_admin'] && 
                <Route path='/admCategorias' component={CategoriasAdmin} />
            }
            {!user &&
                <Route path='/login' component={Login} />
            }
            {
                user &&
                <Route path='/alterarDados' component={UpdateUser} />
            }
            {!user &&
                <Route path='/cadastrar' component={Cadastro} />
            }
            {user &&
                <Route path='/user' component={User} />
            }
            {user?
                <Route path='/meusFavoritos' component={MeusFavoritos} />
                :
                <Route path='/meusFavoritos' component={Login} />
            }
            {/* <Route path='/meusFavoritos' component={MeusFavoritos} /> */}
            <Route path='*' component={Home} />
        </Switch>
    )
}

export default Routes