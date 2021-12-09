import { api } from "../../services/api"
import { Container, Item } from "./styles"
import EditPencil from "./../../imgs/edit_pencil.jpg"
import Trash from "./../../imgs/trash.png"



const GridCategories = ({categories}) => {
    const DeleteCat = async (category,event) => {
        const confirmacao = prompt(`Digite \"DELETAR\" caso realmente queira deletar a categoria ${category.name}`)
        if (confirmacao === "DELETAR"){
            await api.delete(`/categories/delete/${category.id}`)
                .then((response) => {
                    alert(response.data)
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
                    <td class="id">ID</td>
                    <td class="name">NOME</td>
                    <td class="options">OPÇÕES</td>
                </Item>
                {categories.map( (category, index) => (
                    <Item key={index}>
                        <td class="id">{category.id}</td>
                        <td class="name">{category.name}</td>
                        <td class="options">
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