export default function Item ( props ) {
    return <div className="item-card">
        <h4>{props.title}</h4>
        <img width= "100" src = {props.img} alt="" />
        <p> {props.description} </p>
        <button className="btn-bewitched">I'm bewitched</button>
    </div>
}