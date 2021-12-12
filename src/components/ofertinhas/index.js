import Ofertinha from '../ofertinha'
import {
    Container
} from './styles'

const Ofertinhas = () => {
    return (
        <Container>
            <Ofertinha src={"https://www.culturamix.com/wp-content/uploads/2010/03/1205165041_f.jpg"} text={"Nossos funcionários estão prontos para te receber e te servir com muita alegria. Sempre muito atenciosos, te receberemos de braços abertos no nosso maravilhosos restaurante!"}/>
            <Ofertinha src={"https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/b/bob-esponja-hamburguer-siri-08.17-1400x800.jpg"} text={"Conheça nosso saboroso hamburguer de siri! O prato mais famoso do restaurante, com sua formula secreta indecifrável e seu sabor único."}/>
            <Ofertinha src={"https://img.cybercook.com.br/receitas/388/batata-frita-na-air-fryer.jpeg"} text={"Aproveite o domingo da entrada em dobro! Chame a galera e aproveite."}/>
        </Container>
    )
    
}

export default Ofertinhas