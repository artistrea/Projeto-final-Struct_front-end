import { Container } from "./styles"
import { useState } from "react"
import { userApi } from "../../services/api"
import Button from "../button"
import { useUserContext } from "../../context/useUserContext"

const UpdateUserForm = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_confirmation] = useState('')
    const {updateUser} = useUserContext

    return(
        <Container>
            <form onSubmit={(event) => {event.preventDefault(); updateUser(name, password, password_confirmation)}}>
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