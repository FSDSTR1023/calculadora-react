import PropTypes from "prop-types";

function Button({ t }) {
  // Opciones para acceder a las props
  // function Button({titles, numbers}) {
  // const { titles, numbers } = props;
  // props.titles o props.numbers
  return <button className="m-2 bg-cyan-600 rounded-md text-white p-2">{t}</button>;
}

Button.propTypes = {
  t: PropTypes.string,
};

export default Button;
