import harryPotterCharacters from "../data/data.js";
import getData from "../data/mockAPIService.js";
import Item from "./Item";

function ItemListContainer(props){
    console.log(harryPotterCharacters)
    getData()
    .then( (data) => console.log("datos recibidos", data))
    .catch()
    
    return(
        <section className="itemList">
            <h3>{props.greeting}</h3>      
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
                     <br></br>
                     </div>
                )
            }
        </section>
    )
}

export default ItemListContainer;