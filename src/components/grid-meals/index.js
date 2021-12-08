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
            <h1>Pratos</h1>
            <Item>
                <tr>NOME</tr>
                <tr>PREÇO</tr>
                <tr>ID DA CATEGORIA</tr>
                <tr>DESCRIÇÃO</tr>
                <tr>OPÇÕES</tr>
            </Item>
            {meals.map( (meal) => (
                <Item>
                    <tr>{meal.name}</tr>
                    <tr>{(meal.price).toFixed(2)}</tr>
                    <tr>{meal.category_id}</tr>
                    <tr>{meal.description}</tr>
                    <tr>
                        {/* transformar de <a> para <Link> */}
                        <a><img src={EditPencil} alt="Edit"></img></a>
                        <img onClick={() => DeleteCat(meal)} src={Trash} alt="Delete"></img>
                    </tr>
                </Item>
            ))}
        </Container>
    )
}

export default GridMeals