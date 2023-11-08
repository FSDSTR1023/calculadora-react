/* eslint-disable react/prop-types */
import "../hojas-de-estilos/Boton.css"

const ClearBtn = (props) => (
    <div 
    className="clear-btn container-btn operator" 
    onClick={props.handleClear}
    >
        C
    </div>
);

export default ClearBtn ;