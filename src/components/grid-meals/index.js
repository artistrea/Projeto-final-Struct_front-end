import { api } from "../../services/api"
import { Container, Item } from "./styles"
import EditPencil from "./../../imgs/edit_pencil.jpg"
import Trash from "./../../imgs/trash.png"
import { useUserContext } from "../../context/useUserContext"


const GridMeals = ({meals}) => {


    const {user} = useUserContext()

    const DeleteCat = async (meal,event) => {
        const confirmacao = prompt(`Digite \"DELETAR\" caso realmente queira deletar o prato ${meal.name}`)
        if (confirmacao === "DELETAR"){
            await api.delete(`/meals/delete/${meal.id}`, {
                headers:{
                    'X-User-Token': user['authentication_token'],
                    'X-User-Email': user['email']
                }
            }).then((response) => {
                alert(`O prato ${meal.name} foi deletado`)
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
                    <td className="name">NOME</td>
                    <td className="price">PREÇO</td>
                    <td className="cat-id">ID DA CATEGORIA</td>
                    <td className="descriptiom">DESCRIÇÃO</td>
                    <td className="options">OPÇÕES</td>
                </Item>
                {meals.map( (meal, index) => (
                    <Item key={index}>
                        <td className="name">{meal.name}</td>
                        <td className="price">{(meal.price).toFixed(2)}</td>
                        <td className="cat-id">{meal.category_id}</td>
                        <td className="description">{meal.description}</td>
                        <td className="options">
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