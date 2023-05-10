import "./Version.css";
import React, { useState } from 'react';

const Version = (props) => {
    const [texto, setTexto] = useState(props.version1);

    const handleBoton1 = () => {
      setTexto(props.version1);
    };
  
    const handleBoton2 = () => {
      setTexto(props.version2);
    };
  
    return (
      <div className="mb-3">
        <div className="mb-3">{texto}</div>
        <div className="mx-2">Versiones: 
        <button class="boton-circulo-azul mx-2" onClick={handleBoton1}>
       <div class="circulo-externo">
       <div class="circulo-medio-azul"></div>
       </div>
        </button>
        <button class="boton-circulo-rojo mx-2"  onClick={handleBoton2}>
       <div class="circulo-externo">
       <div class="circulo-medio-rojo"></div>
       </div>
        </button>

        </div>
      </div>
    );
  }
   
  export default Version