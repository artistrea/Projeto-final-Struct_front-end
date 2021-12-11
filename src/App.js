import './global.css'
import { useEffect, useState } from "react";
import { api } from "./services/api"

import Footer from "./components/footer";
import Ofertas from "./components/ofertas";
import Ofertona from "./components/ofertona";
import Ofertinhas from "./components/ofertinhas";
import Button from "./components/button";
import Filtro from "./components/filtro-cardapio";
import Banner from './components/banner-combos';
import Perfil from './components/foto-perfil';
import Imagem from './components/imagem';
import ImagemR from './components/imagem-responsiva';
import Navbar from './components/navbar';
import LoginForm from './components/Formulario-login';
import Cadastro from './components/formulario-cadastro';
import AlterarDados from './components/formulario-alterar-dados';
import {Pratos} from './components/pratos';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { UserProvider } from './context/useUserContext';


function App() {

  // const [categories, setCategories] = useState([])

  // useEffect(() => {
  //   api.get('/categories/index').then((response) => {
  //     setCategories(response.data)
  //   })
  // }, [])


  // const [meals, setMeals] = useState([])
  // useEffect(() => {
  //   api.get('/meals/index').then((response) => {
  //     setMeals(response.data)
  //   })
  // }, [])

  
  
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes />
        <Footer />
      </ BrowserRouter>
    </UserProvider>
  );
}

export default App;
