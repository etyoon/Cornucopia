import { useIngredientsContext } from "../hooks/useIngredientsContext"

//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const IngredientDetails = ({ ingredient }) => {

    const { dispatch } = useIngredientsContext()

    const handleClick = async () => {
        const response = await fetch('/api/ingredient/' + ingredient._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: "DELETE_INGREDIENTS", payload: json})
        }
    }

    return (
        <div className="ingredient-details">
            <h4>{ingredient.title}</h4>
            <p><strong>Quantity (g): </strong> {ingredient.quantity}</p>
            <p><strong>Expiration: </strong> {ingredient.expiration}</p>
            <p>{formatDistanceToNow(new Date(ingredient.createdAt), { addSuffix: true})}</p>
            <button onClick={handleClick}>delete</button>
        </div>
    )
}

export default IngredientDetails