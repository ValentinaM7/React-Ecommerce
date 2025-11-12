import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/FirestoreService";
import Swal from "sweetalert2";
import "./cartContainer.css"

function CartContainer() {
  const { cart, clearCart } = useContext(cartContext);

  async function handleCheckOut(){
    const orderData={
      buyer: {name: "Greg", email: "jaknlak@yahoo.com", phone: 1234},
      cart,
      total: 333,
      date: new Date (),
    }

    const response = await createBuyOrder(orderData);
    if (response) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Your order is confirmed. Your ID is ${response.id}`,
          showConfirmButton: false,
          timer: 3000,
}); clearCart()
    }
  }

  return (
    <section>
      <h2>You are adopting:</h2>
      <div>
        { cart.map ( character => <div key= {character.id}>
            <h4>{character.name}</h4>
            <img width="200" src={character.image} alt="" />
            <p> {character.house} </p>
            <p> Quantity: {character.quantity} </p>
            </div>) }
      </div>
      <hr/>
      <div>
        <p>Total price: 999</p>
      </div>
        <button onClick={handleCheckOut}>I want them all!</button>
    </section>
  );

}
export default CartContainer;
