import { Route, Switch } from "react-router"
import Cardapio from "../pages/Cardapio"
import Home from "../pages/Home"
import Testes from "../pages/Testes"

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cardapio' component={Cardapio} />
            {/* Rota de testes, apagar na versão final */}
            <Route path='/testes' component={Testes} />
            {/* <Route path='/login' component={} />
            <Route path='/cadastrar' component={} />
            <Route path='/formPrato' component={} />
            <Route path='/formCategoria' component={} />
            <Route path='/formUsuario' component={} />
            <Route path='/meusFavoritos' component={} /> */}
        </Switch>
    )
}

export default Routes