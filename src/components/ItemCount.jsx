import { useContext, useState } from "react";
import  cartContext  from "../context/cartContext";

function ItemCount ({character}){
    
    const [count, setCount ] = useState(1)
    const [limit, setLimit] = useState(false)
    const maxValue = 3;
    const minValue = 0;

    const {addItem} = useContext(cartContext)

    function add () {
        if (count < maxValue)
        {setCount(count+1)}
        else {
            setLimit(true)
        }
    }

    function substract () {
        if (count > minValue)
        {setCount(count-1)
            if (limit) setLimit(false);        
        }
    }
    function addToCart (){
        addItem ( { ...character, quantity: count })
    }
    return(
        <div >
            <div className="buttonsAdd" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <button onClick={substract}>-</button>
                <p>{ count }</p>
                <button onClick={add}>+</button>
            </div>
            {
            limit ? <p> The Ministry of Magic does not allow you to have more than 3 of the same kind </p> : <p> </p>
            }
            <button onClick={addToCart} className="btn-bewitched">I'm bewitched</button>
        </div>
    )

    
}

export default ItemCount;