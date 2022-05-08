import React from 'react';
import Opcion from './Opcion';
import './App.css';

function App() {
  const opciones = [
    {
      eleccion: "piedra",
      derrota: "tijera"
    },
    {
      eleccion: "papel",
      derrota: "piedra"
    },
    {
      eleccion: "tijera",
      derrota: "papel"
    }
  ]


  return (
    <div className="App">
      <div className='opciones'>
        {
          opciones.map((e, index) => <Opcion 
                                    valor={opciones[index]}
                                    />)
        }
      </div>
    </div>
  );
}

export default App;
