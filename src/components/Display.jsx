export function Display(props) {
  const {result, operation} = props;
  return (
    <div className="display flex flex-col gap-2 m-3">
      <input type="text" value={result} className="text-right"/>
      <input type="text" value={operation} className="text-right"/>
    </div>
  )
}