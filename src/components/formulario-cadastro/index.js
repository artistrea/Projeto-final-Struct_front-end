import { Container } from "./styles"
import FieldText from "../field-text";
import { useState } from "react/cjs/react.development";
import { userApi } from "../../services/api";
import Button from "../button";
import { useUserContext } from "../../context/useUserContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CadastroForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_confirmation] = useState('')
    const {cadastrar} = useUserContext()

    return(
        <Container>
            <form onSubmit={(event) => {event.preventDefault(); cadastrar(name, email, password, password_confirmation)}}>
                <h1>Nome:</h1>                    
                <input 
                    placeholder="nome" 
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value) }
                />
                <h1>Email:</h1> 
                <input 
                    placeholder="email" 
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value) }
                    />
                <h1>Senha:</h1>                    
                <input 
                    placeholder="senha" 
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value) }
                />
                <input 
                    placeholder="confirmar senha" 
                    type="password"
                    value={password_confirmation}
                    onChange={(event) => setPassword_confirmation(event.target.value) }
                />
                <Link to='/'>
                    <Button type='submit' text="Cadastrar"/>
                </Link>
            </form>
        </Container>
    );
}

export default CadastroForm