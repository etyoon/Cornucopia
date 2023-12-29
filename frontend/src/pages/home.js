import { useEffect } from "react";
import { useIngredientsContext } from "../hooks/useIngredientsContext";

//components
import IngredientDetails from "../components/IngredientDetails"
import IngredientForm from "../components/ingredientForm";


const Home = () => {

    const {ingredients, dispatch} = useIngredientsContext()

    useEffect(() => {
        const fetchIngredients = async() => {
            const response = await fetch('/api/ingredient')
            const json = await response.json()
            if (response.ok) {
                dispatch({type: 'SET_INGREDIENTS', payload: json})
            }
        }
        fetchIngredients()
    }, [dispatch])
    return (
        <div className="home">
            <div className="ingredients">
                {ingredients && ingredients.map((ingredient) => (
                    <IngredientDetails key={ingredient._id} ingredient = {ingredient} />
                ))}
            </div>
            <IngredientForm />
        </div>
    )
}

export default Home;