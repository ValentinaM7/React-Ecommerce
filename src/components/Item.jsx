import ItemCount from "./ItemCount";
import {Link} from "react-router";
export default function Item ( props ) {

    return <div className="item-card" style={{ border: "solid 1px", width: "250px", margin: "10px", backgroundColor: "gray"}}> 
        <h4>{props.name}</h4>
        <img width= "200" src = {props.image} alt="" />
        <p> {props.house} </p>
        <p> {props.description} </p>
        <p>{props.price}</p>
        <Link to={`/detail/${props.id}`} >
            <button>See details</button>
        </Link>


    </div>
}