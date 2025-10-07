import { useState } from "react";

function ItemCount (){
    
    let [count, setCount ] = useState(1)
    const [limit, setLimit] = useState(false)
    const maxValue = 3;
    const minValue = 0;

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

    return(
        <div>
            <button onClick={substract}>-</button>
            <p>{ count }</p>
            <button onClick={add}>+</button>
            {
            limit ? <p> The Ministry of Magic does not allow you to have more than 3 of the same kind </p> : <p> </p>
            }
        </div>
    )
}

export default ItemCount;