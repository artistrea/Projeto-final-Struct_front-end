import { useState } from "react/cjs/react.development"
import { Container } from "./styles"

const Filtro = ({categories, setFilterBy}) => {
    

    return (
        <Container>
            <button onClick={() => setFilterBy(-1)}>Todos</button>
                {categories.map((item, index) => (
                    <button onClick={() => setFilterBy(item.id)} key={index}>{item.name}</button>
                ))}
        </Container>
    )
}

export default Filtro