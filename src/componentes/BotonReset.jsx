import React from "react";

const BotonReset = (props) => (
<div className="boton-reset"
     onClick={props.hacerReset}>
    {props.children}
</div>
);
export default BotonReset;