import React from 'react';
import '../estilos/BotonReset.css';

const BotonReset = (props) => (
  <div className='boton-Reset' onClick={props.manejarReset}> 
    {props.children}
  </div>
);


export default BotonReset;

//** linea 5, atributo onClick para asignar la función "manejarClear"enviada como un props**/