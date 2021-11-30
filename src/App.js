import './global.css'

import Footer from "./components/footer";
import Ofertas from "./components/ofertas";
import Ofertona from "./components/ofertona";
import Ofertinhas from "./components/ofertinhas";
import { useEffect, useState } from "react";
import Button from "./components/button";
import Filtro from "./components/filtro-cardapio";
import { api } from "./services/api"

function App() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    api.get('/categories/index').then((response) => {
      setCategories(response.data)
    })
  }, [])

  return (
    <>
      
      <Filtro categories={categories}/>
      <Button text="Entrar"/>
      <Button text="Cadastrar"/>
      <Button text="Criar conta"/>
      <Ofertona />
      <Ofertas />
      <Ofertinhas />
      <Footer />
    </>
  );
}

export default App;
