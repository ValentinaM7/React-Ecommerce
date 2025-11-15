import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/FirestoreService";
import Swal from "sweetalert2";
import "./cartContainer.css"
import CheckoutForm from "./checkoutForm";

function CartContainer() {
  const { cart, clearCart, totalPrice } = useContext(cartContext);
  const [orderCreated, setOrderCreated] = useState(false);
  


  async function handleCheckOut(formData){
    const orderData={
      buyer: formData,
      cart,
      total: totalPrice(),
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
    })} ;
    setOrderCreated(response.id)
    clearCart();
   }
    if(orderCreated){
    return(
    <section>
      <h2>Thanks for adopting these characters</h2>
      <p>This is the Id: {orderCreated}</p>
    </section>)
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
            <p> Price: $ {character.price}</p>
            </div>) }
      </div>
      <hr/>
      <div>
        <p>Total price: ${totalPrice()}</p>
      </div>
      <CheckoutForm handleCheckOut= {handleCheckOut}/>
    
    </section>)
  }

export default CartContainer;
