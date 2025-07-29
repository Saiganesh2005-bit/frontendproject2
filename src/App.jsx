import { useState } from 'react'
import './App.css'
import {Link}from'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Frontend class KLU</h1>
      <h2> Today's topic is introduction to react</h2>
      <h3> Today's date is 29.07.2025</h3>
      <h3>2400031380-Saiganesh</h3>
      <Link to="/Page1">Go to page1</Link>
      <br />
      <Link to="/Page2">Go to page2</Link>
      <br />
      <Link to="/Page3">Go to page3</Link>
      
      
    </>
  )
}

export default App