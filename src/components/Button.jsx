import '../styles-components/Button.css';


function Button(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '='); 
  };

  return (
    <div
      className = {`boton-contenedor ${esOperador(props) ? 'operador' : ''}`.trimEnd()}>
      {props}
    </div>
  );
}

export default Button;