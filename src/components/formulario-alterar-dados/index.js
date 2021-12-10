import { Container } from "./styles"
import { useState } from "react"
import { userApi } from "../../services/api"
import Button from "../button"

const UpdateUserForm = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_confirmation] = useState('')
    const updateUser = async () => {
        updateValido() &&
        await userApi.post("/users/create", {
            user:{
                name: name,
                password: password,
                password_confirmation: password_confirmation
            }}).then((response) => alert("criado"))
            .catch((response) => alert("Já existe uma conta com esse e-mail"))
    }
    const updateValido = () => {
        if (name != '') {
            if(password.length >= 6){
                if(password_confirmation === password){
                    return true
                }
                else {alert("Confirmação de senha precisa ser igual à senha"); return false}
            }
            else {alert("Senha precisa ter pelo menos 6 caracteres"); return false}
        }
        else {alert("Nome inválido"); return false}
    }

    return(
        <Container>
            <form onSubmit={(event) => {event.preventDefault(); updateUser()}}>
                <h1>Nome:</h1>                    
                <input 
                    placeholder="nome" 
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value) }
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
                <Button type='submit' text="Confirmar"/>
            </form>
        </Container>
    );
}

export default UpdateUserForm