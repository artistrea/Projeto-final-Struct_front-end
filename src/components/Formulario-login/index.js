import { Container } from "./styles"
import { useState } from "react/cjs/react.development";
import { userApi } from "../../services/api";
import Button from "./../button/index";
import { useUserContext } from "../../context/useUserContext";

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useUserContext()

    return(
        <Container>
            <form onSubmit={(event) => {event.preventDefault(); login(email, password)}}>
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
                    onChange={(event) => setPassword(event.target.value)}
                    />
                <Button type='submit' text="Entrar"/>
            </form>
        </Container>
    );
}

export default LoginForm