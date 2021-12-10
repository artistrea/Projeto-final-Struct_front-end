import { Container } from "./styles"
import FieldText from "../field-text";
import { useState } from "react/cjs/react.development";
import { userApi } from "../../services/api";
import Button from "../button";

const CadastroForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_confirmation] = useState('')
    const cadastrar = async () => {
        cadastroValido() &&
        await userApi.post("/users/create", {
            user:{
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }}).then((response) => alert("criado"))
            .catch((response) => alert("Já existe uma conta com esse e-mail"))
    }
    
    const cadastroValido = () => {
        if (name != '') {
            if(email!= '' &&  email.includes('@')){
                if(password.length >= 6){
                    if(password_confirmation === password){
                        return true
                    }
                    else {alert("Confirmação de senha precisa ser igual à senha"); return false}
                }
                else {alert("Senha precisa ter pelo menos 6 caracteres"); return false}
            }
            else {alert("Email inválido"); return false}
        }
        else {alert("Nome inválido"); return false}
    }

    return(
        <Container>
            <form onSubmit={(event) => {event.preventDefault(); cadastrar()}}>
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
                <Button type='submit' text="Entrar"/>
            </form>
        </Container>
    );
}

export default CadastroForm