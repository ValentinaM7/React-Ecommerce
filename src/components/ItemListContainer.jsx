// import harryPotterCharacters from "../data/data.js";
 import getData, { getProductsByHouse } from "../data/mockAPIService.js";
 import Item from "./Item";
 import "./itemListContainer.css";
 import { useState, useEffect } from "react";
 import { useParams } from "react-router";

function ItemListContainer(props){
    getData(); 

    const [harryPotterCharacters, setharryPotterCharacters] = useState([])
    const {houseParam} = useParams();

    useEffect(() =>{
        if (houseParam) {
            getProductsByHouse (houseParam)
            .then ( (data) => setharryPotterCharacters(data))
        }else{
            getData() //simula el fetch
        .then( (data) => {
        console.log("datos recibidos", data)
        setharryPotterCharacters(data)})
        }
    }, [houseParam])
    
    
    return(
        <section className="itemList">
            <h3>{props.greeting}</h3>
            <div className="ListOfCharacters">      
            {
                harryPotterCharacters.map( item => 
                <Item
                    key={item.id}
                    { ...item}
                    />
                )
            }
            </div>
        </section>
    )
}

export default ItemListContainer;