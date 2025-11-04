import { useContext } from "react";
import cartContext from "../context/cartContext";
import Item from "./Item";

function CartContainer() {
  const { cart } = useContext(cartContext);
  return (
    <section>
      <h2>You are adopting:</h2>
      <div>
        { cart.map ( character => <div key= {character.id}>
            <h4>{character.name}</h4>
            <img width="200" src={character.image} alt="" />
            <p> {character.house} </p>
            <p> Quantity{character.quantity} </p>
            <p>{character.price}</p>
            </div>) }
      </div>
      <hr/>
      <div>
        Total price:
      </div>
    </section>
  );

}
export default CartContainer;
