import Item from "./item";

function ItemListContainer(props){
    return(
        <section>
            <h3>{props.greeting}</h3>
            {
                characters.map( character => 
                <Item
                    name = {Item.name}
                    date = {Item.date}
                    image = {Item.image} />
                )
            }
        </section>
    )
}

export default ItemListContainer;