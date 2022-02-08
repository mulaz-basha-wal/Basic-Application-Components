import './App.css';
import Todos from './Todo';
import Average from './Average';
import AddNos from './AddNos';
import MiniCalculator from './MiniCalculator';

function App() {
  return (
    <div className="App">
      <Todos/>
      <AddNos num1={7} num2={21}/>
      <Average/>
      <MiniCalculator num1={7} num2={21} operation={"Add"}/>
    </div>
  );
}

export default App;