import { IngredientsContext } from "../context/IngredientsContext";

import { useContext } from "react";

export const useIngredientsContext = () => {
    const context = useContext(IngredientsContext)

    if (!context) {
        throw Error('useIngredientsContext must be used in ingredients provider')
    }

    return context
}