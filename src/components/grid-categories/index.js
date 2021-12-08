import { api } from "../../services/api"
import { Container, Item } from "./styles"
import EditPencil from "./../../imgs/edit_pencil.jpg"
import Trash from "./../../imgs/trash.png"



const GridCategories = ({categories}) => {
    const DeleteCat = async (category,event) => {
        var str = 1
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
            <h1>Categorias</h1>
            {categories.map( (category) => (
                <Item>
                    <tr>{category.id}</tr>
                    <tr>{category.name}</tr>
                    <tr>
                        {/* transformar de <a> para <Link> */}
                        <a><img src={EditPencil} alt="Edit"></img></a>
                        <img onClick={() => DeleteCat(category)} src={Trash} alt="Delete"></img>
                    </tr>
                </Item>
            ))}
        </Container>
    )
}

export default GridCategories