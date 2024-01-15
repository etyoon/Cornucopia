import { useAuthContext } from "./useAuthContext"
import { useIngredientsContext } from "./useIngredientsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: ingredientDispatch } = useIngredientsContext()

    const logout = () => {
        //remove user fr
        localStorage.removeItem('user')

        //dispatch
        dispatch({type: 'LOGOUT'})
        ingredientDispatch({type: 'SET_INGREDIENTS', payload: null})
    }

    return {logout}
}