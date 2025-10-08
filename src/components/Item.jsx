import ItemCount from "./ItemCount";

export default function Item ( props ) {

    return <div className="item-card" style={{ border: "solid 1px", width: "250px", margin: "10px", backgroundColor: "gray"}}> 
        <h4>{props.name}</h4>
        <img width= "200" src = {props.image} alt="" />
        <p> {props.house} </p>
        <p> {props.description} </p>
        <p>{props.price}</p>
        <button className="btn-bewitched">I'm bewitched</button>
        <ItemCount/>
    </div>
}