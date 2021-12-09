import './global.css'

import Footer from "./components/footer";
import Ofertas from "./components/ofertas";
import Ofertona from "./components/ofertona";
import Ofertinhas from "./components/ofertinhas";
import { useEffect, useState } from "react";
import Button from "./components/button";
import Filtro from "./components/filtro-cardapio";
import { api } from "./services/api"
import Banner from './components/banner-combos';
import Perfil from './components/foto-perfil';
import Imagem from './components/imagem';
import ImagemR from './components/imagem-responsiva';
import Navbar from './components/navbar';
import Login from './components/Formulario-login';
import Cadastro from './components/formulario-cadastro';
import AlterarDados from './components/formulario-alterar-dados';

function App() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    api.get('/categories/index').then((response) => {
      setCategories(response.data)
    })
  }, [])

  return (
    <>
      {/*<Navbar text="Perfil"/>*/}
      {/*<Login/>*/}
      {/*<Cadastro/>*/}
      <AlterarDados/>
      {/* <Filtro categories={categories}/> */}
      {/*<Imagem />
      <ImagemR /> */}
      {/* <Perfil />*/}
      {/*<Button text="Entrar"/>*/}
      {/*<Button text="Cadastrar"/>*/}
      {/*<Button text="Criar conta"/>
      <Ofertona />
      <Ofertas /> 
      <Ofertinhas />  */}
      {/*<Footer/>*/}
    </>
  );
}

export default App;
