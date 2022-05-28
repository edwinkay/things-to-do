import React from "react";
import '../Styles/tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea ({id, texto, completada, completarTarea,eliminartarea}) {
    return (
      <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
        <div className="tarea-texto"
        onClick={() => completarTarea(id)}>
          {texto}
          </div>
        <div className="tarea-contenedor-iconos"
        onClick={() => eliminartarea(id)}>
          <AiOutlineCloseCircle className="tarea-icono" />
        </div>
      </div>
    );
}
export default Tarea;