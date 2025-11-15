import { useState, createContext } from "react";

const cartContext = createContext({cart: []}); 

export function CartContextProvider( {children} ){
    const [cartItems, setCartItems] = useState([]);

    function addItem(item) {
        const newCartItems = structuredClone(cartItems)
        newCartItems.push(item)
        setCartItems(newCartItems)
    }

    function removeItem(id){
        setCartItems(cartItems.filter(item =>item.id !== id))
    }

    function clearCart(){
        setCartItems([]);
    }

    function cartItemsCount(){
        let totalCharacters = 0;
        cartItems.forEach( (character) => totalCharacters += character.quantity)
        return totalCharacters;
    }

    function totalPrice(){
        return cartItems.reduce((acc, character) => {
        const priceNumber =parseFloat(character.price)  
            return (acc + priceNumber * character.quantity)
            }, 0)
    }
    
    return(
        <cartContext.Provider value={ {cart: cartItems, addItem, removeItem, clearCart, cartItemsCount, totalPrice}}>
            {children}
        </cartContext.Provider>
    );
}



export default cartContext;