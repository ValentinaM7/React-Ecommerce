import './App.css'
import ItemCount from './components/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/navBar'
import { useState, createContext } from "react"
import { BrowserRouter,Routes, Route} from 'react-router'
import { CartContextProvider } from './context/cartContext'
import CartContainer from './components/CartContainer'
import { exportCharacters } from './data/FirestoreService'


function App() {

  return (
  <BrowserRouter>
 
    <CartContextProvider>
      <NavBar/>
      <div>
        <h1>It´s LeviOsa,  not LeviosA</h1>
        <p>A world to be enchanted</p>
      </div>
      <Routes>
      
        <Route path= "/" element= {<ItemListContainer greeting= "Choose your character to begin this journey"/>} /> 
        <Route path= "*" element={ <div><h2>Error 404: no se encontraron los resultados</h2></div>} />
        <Route path= "/detail/:detailcharacter" element= {  <ItemDetailContainer/> }/> 
        <Route path= "/house/:houseParam" element= {<ItemListContainer greeting= "Houses"/>}/>
        <Route path= "/cart" element= {<CartContainer/> }></Route>
      </Routes>
    </CartContextProvider>
  </BrowserRouter>)
}
  


export default App;
