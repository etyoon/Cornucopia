import { useIngredientsContext } from "../hooks/useIngredientsContext"
import { useState } from "react";

//date fns
// import formatDistanceToNow from "date-fns/formatDistanceToNow"

const IngredientDetails = ({ ingredient }) => {

    const [error, setError] = useState(null)


    const { dispatch } = useIngredientsContext()

    const deleteClick = async () => {
        const response = await fetch('/api/ingredient/' + ingredient._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: "DELETE_INGREDIENTS", payload: json})
        }
    }

    const updateClick = async() => {
        const quantityUsed = Number(prompt("Enter amount used: "))

        const new_quantity = ingredient.quantity - quantityUsed
        if (new_quantity > 0) {
            const response = await fetch('/api/ingredient/' + ingredient._id, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json'
                },
                method: "PATCH",
                body: JSON.stringify({quantity: ingredient.quantity - quantityUsed})
            })
    
            const json = await response.json()
            if (!response.ok) {
                setError(json.error)
            }
            else if (response.ok) {
                setError(null)
                console.log('ingredient updated', json)
                dispatch({type: "UPDATE_INGREDIENTS", payload: json})
            }
        } else {
            deleteClick()
        }
        
    }

    return (
        <div className="ingredient-details">
            <h4>{ingredient.title}</h4>
            <p><strong>Quantity (g): </strong> {ingredient.quantity}</p>
            <p><strong>Expiration: </strong> {ingredient.expiration}</p>
            {/* <p>{formatDistanceToNow(new Date(ingredient.createdAt), { addSuffix: true})}</p> */}
            <button onClick={deleteClick}>delete</button>
            <button onClick = {updateClick}>update</button>
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default IngredientDetails