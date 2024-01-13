import { useState } from "react";
import { useIngredientsContext } from "../hooks/useIngredientsContext";


const IngredientForm = () => {
    const {dispatch} = useIngredientsContext()
    const [title, setTitle] = useState("")
    const [quantity, setQuantity] = useState("")
    const [expiration, setExpiration] = useState("")
    const [error, setError] = useState(null)
    const [emptyfields, setEmptyfields] = useState([])
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        const ingredient = {title, quantity, expiration}
        const response = await fetch('/api/ingredient', {
            method: 'POST',
            body: JSON.stringify(ingredient),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyfields(json.emptyfields)
        }
        if (response.ok) {
            setTitle("")
            setQuantity("")
            setExpiration("")
            setEmptyfields([])
            setError(null)
            console.log('new ingredient added', json)
            dispatch({type: "CREATE_INGREDIENTS", payload: json})
        }
    }

    return (
        <form className = 'create' onSubmit={handleSubmit}>
            <h3> Add a New Ingredient </h3>

            <label>Ingredient Title: </label>
            <input type='text' onChange={(e) => setTitle(e.target.value)} value = {title} className={emptyfields.includes('title') ? 'error': ''}></input>
            <br></br>
            <label>Quantity (g): </label>
            <input type='number' onChange={(e) => setQuantity(e.target.value)} value = {quantity} className={emptyfields.includes('quantity') ? 'error': ''}></input>
            <br></br>
            <label>Expiration (YYYY-MM-DD): </label>
            <input type='text' onChange={(e) => setExpiration(e.target.value)} value = {expiration} className={emptyfields.includes('expiration') ? 'error': ''}></input>
            <button>Add Ingredient</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default IngredientForm