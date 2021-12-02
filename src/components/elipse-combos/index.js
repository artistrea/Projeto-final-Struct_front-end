import {
    Container
} from './styles'

const Elipse = (props) => {
    return (
        <Container>
            <p>{props.dia}</p>
            <p>{props.combo}</p>
            <p>{props.preco}</p>
        </Container>
    )
}

export default Elipse