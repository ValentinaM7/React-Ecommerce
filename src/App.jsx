import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/navBar'
import { BrowserRouter,Routes, Route} from 'react-router'

function App() {

  return (
  <>
    <NavBar/>
    <div>
      <h1>It´s LeviOsa,  not LeviosA</h1>
      <p>A world to be enchanted</p>
    </div>
    <ItemListContainer greeting= "Choose your character to begin this journey"/>
    
  </>
  )
}

export default App
