import { Container } from "./styles"
import { useState } from "react/cjs/react.development";
import { userApi } from "../../services/api";
import Button from "./../button/index";

const LoginForm = () => {
    const [user, setUser] = useState({})

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = async () => {
        await userApi.get("/users/login", {
            params: {email: email, password: password}
        }).then((response) => setUser(response.data))
        .catch((response) => alert("Senha ou usuário incorreto"))
    }
    

    return(
        <Container>
            <form onSubmit={(event) => {event.preventDefault(); login()}}>
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