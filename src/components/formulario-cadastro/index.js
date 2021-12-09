import { Container } from "./styles"
import FieldText from "../field-text";

const Cadastro = () => {

    return(
        <Container>
            <div>
                <div class='form-nome'>
                    <h1>Nome:</h1>                    
                    <FieldText text="text" text="nome"/>                   
                </div>
                <div class='form-email'>
                    <h1>Email:</h1>                    
                    <FieldText text="email"/>
                </div>
                <div class='form-senha'>
                    <h1>Senha:</h1> 
                    <div class="separar-campos">
                        <FieldText text="text" text="senha"/>
                    </div>
                    <FieldText text="text" text="confirmar senha"/>
                </div>  
            </div>
        </Container>
    );
}

export default Cadastro