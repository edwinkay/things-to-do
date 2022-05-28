
import './App.css';
import React from 'react';
import Listadetareas from './components/listaDeTareas';


function App() {
  return (
    <div className="App">
      <div >
        <div className="contenedor">
          <div className="titulo">
            <h1>To do List</h1>
          </div>
          <div className="tareas-lista-principal">
            <Listadetareas />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
