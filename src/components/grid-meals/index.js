import { api } from "../../services/api"
import { Container, Item } from "./styles"
import EditPencil from "./../../imgs/edit_pencil.jpg"
import Trash from "./../../imgs/trash.png"



const GridMeals = ({meals}) => {
    const DeleteCat = async (meal,event) => {
        const confirmacao = prompt(`Digite \"DELETAR\" caso realmente queira deletar o prato ${meal.name}`)
        if (confirmacao === "DELETAR"){
            await api.delete(`/meals/delete/${meal.id}`)
                .then((response) => {
                    alert(response.data)
                }).catch((error) => {
                    alert(error.message)
                })
        }
        else {alert("O prato NÃO foi deletado")}  
    }

    return (
        <Container>
            <thead>
                <tr><td><h1>Pratos</h1></td></tr>
            </thead>
            <tbody>
                <Item>
                    <td class="name">NOME</td>
                    <td class="price">PREÇO</td>
                    <td class="cat-id">ID DA CATEGORIA</td>
                    <td class="descriptiom">DESCRIÇÃO</td>
                    <td class="options">OPÇÕES</td>
                </Item>
                {meals.map( (meal, index) => (
                    <Item key={index}>
                        <td class="name">{meal.name}</td>
                        <td class="price">{(meal.price).toFixed(2)}</td>
                        <td class="cat-id">{meal.category_id}</td>
                        <td class="description">{meal.description}</td>
                        <td class="options">
                            {/* transformar de <a> para <Link> */}
                            <a><img src={EditPencil} alt="Edit"></img></a>
                            <img onClick={() => DeleteCat(meal)} src={Trash} alt="Delete"></img>
                        </td>
                    </Item>
                ))}
            </tbody>
        </Container>
    )
}

export default GridMeals