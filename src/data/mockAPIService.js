import harryPotterCharacters from "./data.js"

function getData(){
    return new Promise ( (resolve, reject) => {
        setTimeout( () =>{resolve(harryPotterCharacters)}, 1000)
        
    })
}


export function getCharacterById(detailcharacter){
    return new Promise ( (resolve) => {
        const itemRequested = harryPotterCharacters.find ( (item) => 
            String(item.id) === detailcharacter)
        setTimeout ( () => { resolve(itemRequested)}, 3000)
})
}

export function getProductsByHouse(houseParam){
    return new Promise ( (resolve) => {
        const itemsRequested = harryPotterCharacters.filter ( (item) => { return item.house === houseParam})
        setTimeout ( () => { resolve(itemsRequested)}, 1000)
})
}

export default getData