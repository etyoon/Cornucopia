import {useState} from "react"

const recipeForm = () => {
    const [title, setTitle] = useState("")
    const [ingredients, set] = useState("")

    return (
        <form className="createRecipe">
            <h3>Add a new recipe</h3>
            <label>Recipe Name</label>
            <input
            type = "text"
            onChange={(e) => setTitle(e.target.value)}
            value = {title}
            />
        </form>
    )
}
