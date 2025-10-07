import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/navBar'

function App() {

  return (
  <>
    <NavBar/>
    <div>
      <h1>Harry Potter world</h1>
      <p>A world to be enchanted</p>
    </div>
    <ItemListContainer greeting= "Choose your character to begin this journey"/>
    <ItemCount/>
  </>
  )
}

export default App
