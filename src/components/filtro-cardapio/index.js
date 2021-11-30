import { Container } from "./styles"

const Filtro = ({categories}) => {
    return (
        <Container>
                {categories.map((item, index) => (
                    <button key={index}>{item.name}</button>
                ))}
        </Container>
    )
}

export default Filtro