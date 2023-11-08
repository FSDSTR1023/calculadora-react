/* eslint-disable react/prop-types */
import "../hojas-de-estilos/Boton.css"

function Boton(props) {
    const isOperator = valor => {
        return isNaN(valor) && (valor != ".") && (valor != "=");
    };
    return(
        <div
        className= {`container-btn ${isOperator(props.children) ? "operator" : ""}`.trimEnd()}
        onClick={() => props.handleClick(props.children)}>
        {props.children}
        </div>
    );
}

export default Boton;