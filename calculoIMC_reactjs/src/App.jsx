import React from 'react'
import './App.css'
import Header from './Header'

function App() {

  let p = document.getElementById('txtp');
  let a = document.getElementById('txta');

  const peso = Number(p.value)
  const altura = Number(a.value)

  const IMC = peso / altura**2;

  

  
    
  return (
    <>
      <Header />
      <main>
        <label htmlFor="txtp"></label>
        <input type="number" name="txtp" id="txtp" />

        <label htmlFor="txta"></label>
        <input type="number" name="txta" id="txta" />

        <button onClick={App}>Verificar</button>

        <IMC />
      </main>
    </>
  )
  

}

export default App
