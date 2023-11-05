import React from 'react'
import '../estilos/Boton.css'

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };

    return (
     <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.manejarClic(props.children)}>
      {props.children}
     </div>
    );
}

export default Boton;

/** linea 12, js para determinar si el valor de "children" es un operador o no, con la funcion "esOperador" enviada como un props,
 *  y método "trim" para remover espacio al final de la cadena de caracteres.
 *  linea 7 js,"valor" retorna 3 criterios si no es numero, punto o signo igual es "operador"**/