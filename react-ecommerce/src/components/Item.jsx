export default function Item ( props ) {
    return <div>
        <h4>{props.title}</h4>
        <img width= "100" src = {props.img} alt="" />
        <p> {props.description} </p>
        <button>I'm bewitched</button>
    </div>
}