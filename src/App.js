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
import {Pratos} from './components/pratos';
import GridCategories from './components/grid-categories';
import GridMeals from './components/grid-meals';

function App() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    api.get('/categories/index').then((response) => {
      setCategories(response.data)
    })
  }, [])


  const [meals, setMeals] = useState([])
  useEffect(() => {
    api.get('/meals/index').then((response) => {
      setMeals(response.data)
    })
  }, [])

  return (
    <>
      <GridMeals meals={meals}/>
      <GridCategories categories={categories}/>
      {/* <Filtro categories={categories}/> 
      <Pratos meals={meals}/>
      <Imagem />
      <ImagemR />
      <Perfil />
      <Button text="Entrar"/>
      <Button text="Cadastrar"/>
      <Button text="Criar conta"/> 
      <Ofertona />
      <Ofertas /> 
      <Ofertinhas /> 
      <Footer /> */}
    </>
  );
}

export default App;
