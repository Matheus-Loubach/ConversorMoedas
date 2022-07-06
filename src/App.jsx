import '../src/global.css';
import Conversor from './component/conversor';
import React from 'react';


function App() {
  return (
    <div className='App'>
      <h1>Conversor de Moedas</h1>
      <div className='linha'>
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className='linha'>
      <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <div className='linha'>
      <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
      <footer className='nome'><a href="https://front-end-developer.pages.dev">@Matheus_Loubach</a></footer>
    </div>
  
  );
}

export default App;

