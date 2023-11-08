import "../Hojas de estilo/Calculator.css";

const Button = (props) => {
const {content, result} = props;
//const handleClick = () => {}

  return (
    <button onClick={() => result(content)}>{content}</button>
  )
}

export default Button;
