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
        <button className="boton-circulo-azul mx-2" onClick={handleBoton1}>
       <div className="circulo-externo">
       <div className="circulo-medio-azul"></div>
       </div>
        </button>
        <button className="boton-circulo-rojo mx-2"  onClick={handleBoton2}>
       <div className="circulo-externo">
       <div className="circulo-medio-rojo"></div>
       </div>
        </button>

        </div>
      </div>
    );
  }
   
  export default Version
