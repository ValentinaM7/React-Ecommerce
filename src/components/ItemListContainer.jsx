// import harryPotterCharacters from "../data/data.js";
import getData from "../data/mockAPIService.js";
import Item from "./Item";
import "./itemListContainer.css";
import { useState, useEffect } from "react";

function ItemListContainer(props){
    const [harryPotterCharacters, setharryPotterCharacters] = useState([])
    useEffect(() =>{
        getData() //simula el fetch
        .then( (data) => {
        console.log("datos recibidos", data)
        setharryPotterCharacters(data)})
    .catch()}, [])
    
    
    return(
        <section className="itemList">
            <h3>{props.greeting}</h3>
            <div className="ListOfCharacters">      
            {
                harryPotterCharacters.map( item => 
                <div>
                <Item
                    name = {item.name}
                    image = {item.image}
                    house = {item.house}
                    profession = {item.profession}
                    price = {item.price}
                     />
                     </div>
                )
            }
            </div>
        </section>
    )
}

export default ItemListContainer;