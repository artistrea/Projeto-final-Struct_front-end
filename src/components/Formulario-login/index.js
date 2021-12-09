import { Container } from "./styles"
import FieldText from '../field-text';

const Login = () => {

    return(
        <Container>
            <div class='form-email'>
                <h1>Email:</h1> 
                <FieldText text="'email'" text="email" />
            </div>
            <div class='form-senha'>
                <h1>Senha:</h1> 
                <FieldText text="password" text="senha"/>
            </div>  
        </Container>
    );
}

export default Login