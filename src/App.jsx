import "./App.css";
import Button from "./components/Button";

function App() {
  // const [selectedNumber, setSelectedNumber] = useState(null);
  // const [title, setTitle] = useState('');
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const titles = ['Resta', "Suma", "División"];

  // const handleClick = (num) => {
  //   setSelectedNumber(num)
  // }
    
  return (
    <div>
      <h1>Calculadora</h1>
      {
        titles.map(title => <Button key={title} t={title} />)
      }
      <br />
      {/* {selectedNumber} */}
    </div>
  );
}

export default App;


      {/* <div>
        Soy el primer div
      {numbers.map((number, indice) => (
        <>
        {(number > 5) && <button key={indice} style={{ backgroundColor: "coral" }}>{number}</button>}
        {(number <= 5) && <button key={indice} style={{ backgroundColor: "sky" }}>{number}</button>}
        </>
      ))}
      </div> */}
      {/* <div>
        Soy el segundo div
        {numbers.map((number, indice) => {
          // Return de los números
          if (number > 5) {
            return (
              <button key={indice} style={{ backgroundColor: "coral" }} onClick={() => handleClick(number)}>
                {number}
              </button>
            );
          } else {
            return (
              <button key={indice} style={{ backgroundColor: "sky" }}>
                {number}
              </button>
            );
          }
        })}
      </div> */}