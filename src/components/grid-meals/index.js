import { api } from "../../services/api"
import { Container, Item } from "./styles"
import EditPencil from "./../../imgs/edit_pencil.jpg"
import Trash from "./../../imgs/trash.png"



const GridMeals = ({meals}) => {
    const DeleteCat = async (meal,event) => {
        const confirmacao = prompt(`Digite \"DELETAR\" caso realmente queira deletar a categoria ${meal.name}`)
        if (confirmacao === "DELETAR"){
            await api.delete(`/meals/delete/${meal.id}`)
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
                <tr><td><h1>Pratos</h1></td></tr>
            </thead>
            <tbody>
                <Item>
                    <td>NOME</td>
                    <td>PREÇO</td>
                    <td>ID DA CATEGORIA</td>
                    <td>DESCRIÇÃO</td>
                    <td>OPÇÕES</td>
                </Item>
                {meals.map( (meal, index) => (
                    <Item key={index}>
                        <td>{meal.name}</td>
                        <td>{(meal.price).toFixed(2)}</td>
                        <td>{meal.category_id}</td>
                        <td>{meal.description}</td>
                        <td>
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