import harryPotterCharacters from "./data.js"

function getData(){
    return new Promise ( (resolve, reject) => {
        setTimeout( () =>{resolve(harryPotterCharacters)})
        
    })
}

export default getData