import Elipse from '../elipse-combos'
import {
    Container
} from './styles'

const Banner = () => {
    return (
        <Container>
            <Elipse dia="Segunda-Feira" combo="hamburguer de siri + refrigerante" preco="R$11,99"/>
            <Elipse dia="Terça-Feira" combo="Siri Supremo Triplo + Sirishake" preco="R$22,99"/>
            <Elipse dia="Quarta-Feira" combo="mini hamburgueres de siri + água sem sal" preco="R$10,99"/>
            <hr />
            <Elipse dia="Quinta-Feira" combo="hamburguer de siri monstruoso + gelatina" preco="R$18,99"/>
            <Elipse dia="Sexta-Feira" combo="hamburguer de siri de luxo + SiriFlurry" preco="R$21,99"/>
            <Elipse dia="Sábado" combo="2 entradas (à sua escolha) + 2 refrigerantes " preco="R$19,99"/>
            <Elipse dia="Domingo" combo="2 hamburgueres de siri + Sirishake" preco="R$19,99"/>
            <hr />
            <div className="slogan">
                Todos os combos disponiveis no domingo!
            </div>
        </Container>
    )
}

export default Banner