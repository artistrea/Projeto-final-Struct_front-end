import {Container} from './styles.js'
import { Prato } from "./../prato/index.js";


const Pratos = ({meals}) => {
    return (
        <Container>
            
            {meals.map( (meal) => (
                <Prato key={meal.id} meal={meal} />
            ))}

        </Container>
    )
}

export { Pratos }