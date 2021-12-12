import Oferta from '../oferta'
import {
    Container
} from './styles'

const Ofertas = () => {
    return (
        <Container>
            <Oferta src="https://s2.glbimg.com/fcTi7_7wnGQqCLFXxrDOGNTjT3E=/smart/e.glbimg.com/og/ed/f/original/2018/05/23/the_krusty_krab_in_yeti_krabs.jpg" text={"Visite agora mesmo nosso restaurante! Venha saborear nossos deliciosos pratos, na Fenda do Biquini, Rua das Conchas."}/>
            <Oferta src="https://quartelgeneralhome.files.wordpress.com/2020/12/20191215-cheetah-ww84-1200x675-1-2.jpg?w=1024" text={"Aqui no hamburguer de siri temos os melhores cozinheiros, prontos para servir você com o melhor que temos a oferecer. Aproveite nossos deliciosos pratos e bebidas!"}/>
        </Container>
    )
    
}

export default Ofertas