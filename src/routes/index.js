import { Route, Switch } from "react-router"
import Cadastro from "../pages/Cadastro"
import Cardapio from "../pages/Cardapio"
import Home from "../pages/Home"
import Login from "../pages/Login"
import MeusFavoritos from "../pages/MeusFavoritos"
import Testes from "../pages/Testes"

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cardapio' component={Cardapio} />
            {/* Rota de testes, apagar na versão final */}
            <Route path='/testes' component={Testes} />
            <Route path='/login' component={Cadastro} />
            <Route path='/cadastrar' component={Login} />
            {/* <Route path='/user' component={Usuario} /> */}
            {/* <Route path='/formPrato' component={} />
            <Route path='/formCategoria' component={} />
            <Route path='/formUsuario' component={} /> */}
            <Route path='/meusFavoritos' component={MeusFavoritos} /> 
        </Switch>
    )
}

export default Routes