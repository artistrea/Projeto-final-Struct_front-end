import { Route, Switch } from "react-router"
<<<<<<< HEAD
import Cardapio from "../pages/Cardapio"
import Home from "../pages/Home"
=======
import Cadastro from "../pages/Cadastro"
import Cardapio from "../pages/Cardapio"
import Home from "../pages/Home"
import Login from "../pages/Login"
import MeusFavoritos from "../pages/MeusFavoritos"
>>>>>>> 5206c47fe79d4385350f8a3b983d260abcb8cd0c
import Testes from "../pages/Testes"

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cardapio' component={Cardapio} />
            {/* Rota de testes, apagar na versão final */}
            <Route path='/testes' component={Testes} />
<<<<<<< HEAD
            {/* <Route path='/login' component={} />
            <Route path='/cadastrar' component={} />
            <Route path='/formPrato' component={} />
            <Route path='/formCategoria' component={} />
            <Route path='/formUsuario' component={} />
            <Route path='/meusFavoritos' component={} /> */}
=======
            <Route path='/login' component={Login} />
            <Route path='/cadastrar' component={Cadastro} />
            {/* <Route path='/user' component={Usuario} /> */}
            {/* <Route path='/formPrato' component={} />
            <Route path='/formCategoria' component={} />
            <Route path='/formUsuario' component={} /> */}
            <Route path='/meusFavoritos' component={MeusFavoritos} /> 
>>>>>>> 5206c47fe79d4385350f8a3b983d260abcb8cd0c
        </Switch>
    )
}

export default Routes