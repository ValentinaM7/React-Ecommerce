import { getCharacterById } from "../data/FirestoreService";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer () {
    const [itemData, setItemData] = useState({loading : true})
    const {detailcharacter} = useParams()
    
    useEffect ( () => {
        getCharacterById(detailcharacter).then (res => setItemData (res))
    }, [])

    return(
    <ItemDetail itemData={itemData}/>
    )
}

export default ItemDetailContainer
