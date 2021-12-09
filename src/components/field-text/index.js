import { Container } from "./styles";

const FieldText =(props) => {
    return (
        <Container>           
            <input type={props.text} placeholder={props.text}/>
        </Container>
    );
}

export default FieldText