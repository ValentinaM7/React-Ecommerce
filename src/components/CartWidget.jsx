import { useContext } from "react";
import cartContext from "../context/cartContext";
import { Link } from "react-router";

function CartWidget(){
    const {cartItemsCount} = useContext(cartContext);


    return( <div style={{fontSize: "25px"}} >
        <Link to="/cart">     
        ⌁
        {cartItemsCount ()}
        </Link>
    
    </div>)
    
}

export default CartWidget;