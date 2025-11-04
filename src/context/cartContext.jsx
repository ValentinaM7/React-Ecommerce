import { useState, createContext } from "react";

const cartContext = createContext({cart: []}); 

export function CartContextProvider( {children} ){
    const [cartItems, setCartItems] = useState([])

    function addItem(item){
        const newCartItems = structuredClone(cartItems)
        newCartItems.push(item)
        setCartItems(newCartItems)
    }

    function removeItem(id){

    }

    function clearCart(){

    }

    function cartItemsCount(){
        let totalCharacters = 0;
        cartItems.forEach( (character) => totalCharacters += character.quantity)
        return totalCharacters;
    }

    return(
        <cartContext.Provider value={ {cart: cartItems, addItem, cartItemsCount}}>
            {children}
        </cartContext.Provider>
    )
}


export default cartContext;