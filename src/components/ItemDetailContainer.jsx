import { getCharacterById } from "../data/mockAPIService"
import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import { useParams } from "react-router"
import "./itemListContainer.css";

function ItemDetailContainer () {
    const [itemData, setItemData] = useState({loading : true})
    const {detailcharacter} = useParams()
    
    useEffect ( () => {
        getCharacterById(detailcharacter).then (res => setItemData (res))
    }, [])

    return(
        <div className="item-card" style={{ border: "solid 1px", width: "250px", margin: "10px", backgroundColor: "gray"}}> 
            {itemData.loading
                ? <img src="https://res.cloudinary.com/dic68hupx/image/upload/v1760428814/aa013e2813804c05a4a6f5752290a61d_kfuq9k.jpg" className="loadingImage"></img>
                : <div>
                    <h4>{itemData.name}</h4>
                    <img width= "200" src = {itemData.image} alt="" />
                    <p> Price: {itemData.price} </p>
                    <p>Description: {itemData.description}</p>
                    <p>Profession: {itemData.profession}</p>
                    <ItemCount/>
                    <button className="btn-bewitched">I'm bewitched</button>
                </div>
            }
               
                
        
        
            </div>
    )
}

export default ItemDetailContainer
