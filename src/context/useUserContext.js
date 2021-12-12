import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { userApi } from "../services/api";
import { api } from "../services/api";
import EstrelaFavorito from "./../imgs/estrela_favorito.png"
import EstrelaNaoFavorito from "./../imgs/estrela_n_favorito.png"
import Cookie from 'js-cookie'
import { useHistory } from "react-router-dom";

const UserContext = createContext({});

const UserProvider = ({children}) => {

    const [user, setUser] = useState(undefined);

    const login = async (email, password) => {
        
        await userApi.get("/users/login", {
            params: {email: email, password: password}
        })
        .then((response) => {
            setUser(response.data);
            Cookie.set('loggedinuser', JSON.stringify(response.data));
            return true
        })
        .catch((response) => alert("Senha ou usuário incorreto"))
    }

    useEffect(() => {
        const retrievedUser = Cookie.get('loggedinuser')
        if(retrievedUser) {
            setUser(JSON.parse(retrievedUser))
        }
    }, [])

    const updateUser = async (name, password, password_confirmation) => {
        updateValido(name, password, password_confirmation) &&
        await userApi.post("/users/update", {
            user:{
                name: name,
                password: password,
                password_confirmation: password_confirmation
            }}).then((response) => {alert("Dados atualizados com sucesso"); setUser(response.data) })
            .catch((response) => alert("Ocorreu um erro ao tentar atualizar os dados"))
    }
    const updateValido = (name, password, password_confirmation) => {
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

    const cadastrar = async (name, email, password, password_confirmation) => {
        cadastroValido(name, email, password, password_confirmation) &&
        await userApi.post("/users/create", {
            user:{
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }}).then((response) => {login(email, password)})
            .catch((response) => alert("Já existe uma conta com esse e-mail"))
    }
    const cadastroValido = (name, email, password, password_confirmation) => {
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


    const [favorites, setFavorites] = useState([])
    useEffect( async () => {
        user &&
        await api.get('/favorites/index', {
            headers:{
                'X-User-Token': user['authentication_token'],
                'X-User-Email': user['email']
        }})
        .then((response) => {
            setFavorites(response.data)
        })
        .catch(() => setFavorites([]))
    }, [user])
    const addRemoveFavorites = async (estrela, setEstrela, meal_id) => {
        if(estrela === EstrelaFavorito && user) {
            await api.delete(`/favorites/delete/${meal_id}`, {
                headers:{
                    'X-User-Token': user['authentication_token'],
                    'X-User-Email': user['email']
                }})
            .then(() => {setEstrela(EstrelaNaoFavorito);
                const newFav = favorites.filter(function(fav) {
                    if(fav.id === meal_id){ return false }
                    return true
                });
                setFavorites(newFav)})
            .catch((response) => {alert(response)})
        }
        else if(user){
            await api.post("/favorites/create", {favorite: {meal_id: meal_id}}, {
                headers:{
                    'X-User-Token': user['authentication_token'],
                    'X-User-Email': user['email']
                }}
            )
            .then((response) => {setFavorites([...favorites, response.data.meal]); setEstrela(EstrelaFavorito)})
            .catch((response) => alert(response))
        }
        else {alert("Você deve estar logado para favoritar")}
    }

    return (
        <UserContext.Provider value={{user, cadastrar, login, updateUser, favorites, addRemoveFavorites}}>
            {children}
        </UserContext.Provider>
    );
}

const useUserContext = () => {
    const context = useContext(UserContext);
    return context
}

export {UserProvider, useUserContext}