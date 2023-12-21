import PropTypes from 'prop-types';

const Button = ({ value, onClick, id }) => {
  return (
    <button className={`button ${id ? id : ''}`} onClick={() => onClick(value)}>
    {value}
  </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default Button;
