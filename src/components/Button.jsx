export default function Button({value, operations, setOperations, setResult}) {

	const handleClick = () => {

		const operationSymbols = ['/', '*', '-', '+']
		const lastValue = operations.slice(-1)

		if(value==='='){
			try{
				setResult(eval(operations.replace('%', '/100')))
			}catch{
				setResult('Syntax Error')
			}
		}
		else if(value==='←') setOperations(operations => operations.slice(0,-1))
		else if(value==='C'){
			setResult('0')
			setOperations('')
		}else if(operationSymbols.includes(value) && operationSymbols.includes(lastValue)){
			setOperations(operations => operations.slice(0,-1)+value)
		}else{
			setOperations(operations =>
			operations += value
			)
		}
	}

	return (
		<button
			className="button"
			onClick={handleClick}
		>
		{value}
		</button>
	)
}
