import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './Home'
import './App.css'

function greet(){
  return "Welcome Gulmehak"
}
function App() {
  // const [count, setCount] = useState(0)
  const a = 20;
  const b = 10;
  const name = "Gulmehak";

  //Ternary operator: condition? yes: no
  const fruits 
  return (
    <><h1>Home component</h1>
    <p>G2 Students</p>
    <h1>My name is (name)</h1>
    <h2>{greet()}</h2>
    <h2>{name.toUpperCase()}</h2>
    <Home/>
    </>
   )
}

function About(){
  return(
    <>
    <h1>About component</h1>
    <p>is is all about conditional rendering  </p>
    </>
  )
}
export default App
 