export default function Screen({result, operations}) {

    return (
        <div className="screen">
            <input type="text" readOnly value={result}/>
            <input type="text" readOnly value={operations}/>
        </div>
    )
}
