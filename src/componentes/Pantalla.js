import React from "react";
import '../hojas-de-estilo/Pantalla.css'

// Primero asignamos como una constantes para que no se pueda reasignar el valor
const Pantalla = ({ input }) => (
  <div className='input'>
    {input}
  </div>
);


export default Pantalla;