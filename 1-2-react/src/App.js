import React from 'react';
import Navbar from './Navbar';
import Numero from './Numero';
import Post from './Post';
import './App.css';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Numero />
       <Post nick='leandro'mensaje='hola soy leandro'/> 
       <Post nick='francisco'mensaje='hola soy francisco'/>
    </div>
  );
}

export default App;
