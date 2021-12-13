import { api } from "../../services/api"
import { Container, Item } from "./styles"
import EditPencil from "./../../imgs/edit_pencil.jpg"
import Trash from "./../../imgs/trash.png"
import { useUserContext } from "../../context/useUserContext"



const GridCategories = ({categories}) => {

    const {user} = useUserContext()

    const DeleteCat = async (category,event) => {
        const confirmacao = prompt(`Digite \"DELETAR\" caso realmente queira deletar a categoria ${category.name}`)
        if (confirmacao === "DELETAR"){
            await api.delete(`/categories/delete/${category.id}`, {
                headers:{
                    'X-User-Token': user['authentication_token'],
                    'X-User-Email': user['email']
                }
            }).then((response) => {
                alert(`A categoria ${category.name} foi deletada`)
            }).catch((error) => {
                alert(error.message)
            })
               
        }
        else {alert("Categoria NÃO foi deletada")}  
    }

    return (
        <Container>
            <thead>
                <tr><td><h1>Categorias</h1></td></tr>
            </thead>
            <tbody>
                <Item>
                    <td className="id">ID</td>
                    <td className="name">NOME</td>
                    <td className="options">OPÇÕES</td>
                </Item>
                {categories.map( (category, index) => (
                    <Item key={index}>
                        <td className="id">{category.id}</td>
                        <td className="name">{category.name}</td>
                        <td className="options">
                            {/* transformar de <a> para <Link> */}
                            <a><img src={EditPencil} alt="Edit"></img></a>
                            <img onClick={() => DeleteCat(category)} src={Trash} alt="Delete"></img>
                        </td>
                    </Item>
                ))}
            </tbody>
        </Container>
    )
}

export default GridCategories