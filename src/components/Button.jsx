import PropTypes from "prop-types";

function Button({ t }) {
  // Opciones para acceder a las props
  // function Button({titles, numbers}) {
  // const { titles, numbers } = props;
  // props.titles o props.numbers
  return <button>{t}</button>;
}

Button.propTypes = {
  t: PropTypes.string,
};

export default Button;
