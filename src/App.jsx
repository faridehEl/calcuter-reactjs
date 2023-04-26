import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {multiply , add, } from './calculation.jsx'

function App() {
  return(
  <section>
    <ul>
    <li>{multiply(2 , 3)}</li>
      <li>{add(2 , 3)}</li>
    </ul>
  </section>)


}
export default App
