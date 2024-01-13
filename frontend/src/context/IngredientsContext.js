import { createContext , useReducer} from "react";

export const IngredientsContext = createContext()

export const ingredientsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_INGREDIENTS':
            return {
                ingredients: action.payload
            }
        case 'CREATE_INGREDIENTS':
            return {
                ingredients: [action.payload, ...state.ingredients]
            }
        case 'DELETE_INGREDIENTS':
            console.log("delete item")
            return {
                ingredients: state.ingredients.filter((i) => i._id !== action.payload._id)
            }
        case 'UPDATE_INGREDIENTS':
            console.log(action.payload)
            return {
                ingredients: state.ingredients.map(obj => {
                    if (obj._id === action.payload.ingredient._id) {
                       obj.quantity = action.payload.ingredient.quantity
                    }
                    return obj
                })
            }
        default:
            return state
    }
}

export const IngredientsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ingredientsReducer, {
        ingredients: null
    })

    return (
        <IngredientsContext.Provider value = {{...state, dispatch}}>
            { children }
        </IngredientsContext.Provider>
    )
}