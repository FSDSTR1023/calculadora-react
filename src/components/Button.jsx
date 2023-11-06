/*eslint no-undef: "error"*/
export function Button(props) {
  
  const { label, hc } = props;
  
  return (
    <button onClick={() => hc(label)}>{label}</button>
  )
}

