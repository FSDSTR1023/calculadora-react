import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";

function App() {

	const [result, setResult] = useState('0')
	const [operations, setOperations] = useState('')

	const buttonValues = [
		'(', ')', '%', '←',
		7, 8, 9, '/',
		4, 5, 6, '*',
		1, 2, 3, '-',
		'C', 0, '=', '+'
	]

	return (
	<div className="calculator">
		<h1 className="title">Calculadora</h1>

		<Screen
			result={result}
			operations={operations}
		/>

		{buttonValues.map((btn,i) => (
			<Button
				key={i}
				value={btn}
				operations={operations}
				setOperations={setOperations}
				setResult={setResult}
			/>
		))}

	</div>
	);
}

export default App;