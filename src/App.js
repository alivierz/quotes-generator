import './App.css';
import { useState } from 'react';
import Ran from './componentes/random/Random.js';
import Button from './componentes/button/button.js'
import Quotes from './Quotes.json';



function App() {  
  //random de las etiquetas con los metdodos de math
  let max = Quotes.quotes.length - 1; // maximo - 1 [ara evitar errores de posicion
  let [random , setrandom] = useState(Math.floor((Math.random() * (max - 0 + 1)) + 0));
  //colores seleccionados ay wey son muy pocos
  let colors = ['Bred', 'Bblue', 'Bgary', 'Bgreen', 'Bviolet']
  let [color , setcolor] = useState(colors[Math.floor((Math.random() * (4 - 0 + 1)) + 0)])
  //texto

  // la buena funcion que ejecuta muchas cosas, nunca falla
  let change = ()=> {
    setrandom(Math.floor((Math.random() * (max - 0 + 1)) + 0))
    setcolor(colors[Math.floor((Math.random() * (4 - 0 + 1)) + 0)])
  }

  return (
    <div className={`App ${color}`}>
      <div  className='contenedor'>
        <Ran name={Quotes} num={random} col={color}/>
        <Button func={change} col={color}/>
      </div>
    </div>
  );
}

export default App;
