import "./App.css";
import Button from "./components/Button";

function App() {

  const titles = ['Resta', "Suma", "División"];


    
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


      