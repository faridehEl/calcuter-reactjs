import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {multiply , add,subtract } from './calculation.jsx'

function App() {
  return(
  <section>
    <ul>
    <li>{multiply(2 , 3)}</li>
      <li>{add(2 , 3)}</li>
      <li>{subtract(600,10)}</li>
    </ul>
  </section>)


}
export default App
