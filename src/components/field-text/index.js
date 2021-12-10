import { Container } from "./styles";

const FieldText =(props) => {
    return (
        <Container type={props.text} placeholder={props.text} />
    );
}

export default FieldText