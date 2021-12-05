import './global.css'
import ''

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
import AdmSidebar from './components/adm-sidebar';
import { UserProvider } from './context/useUserContext';

function App() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    api.get('/categories/index').then((response) => {
      setCategories(response.data)
    })
  }, [])

  
  return (
    <>
      <UserProvider>
        <AdmSidebar />
      </UserProvider>
      
      {/* <Filtro categories={categories}/>
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
