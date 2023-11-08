import PropTypes from "prop-types";

function ButtonNumber({ t, classes, funcionalidad }) {
  // Opciones para acceder a las props
  // function Button({numbers, numbers}) {
  // const { numbers, numbers } = props;
  // props.numbers o props.numbers
  return <button className={"boton "+classes} onClick={funcionalidad}>{t}</button>;
}

ButtonNumber.propTypes = {
  t: PropTypes.string,
  classes: PropTypes.string,
  funcionalidad: PropTypes.func,
};

export default ButtonNumber;
