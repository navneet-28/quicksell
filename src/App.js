import './App.css';
import Counter from './Components/Counter';

function App() {
  return (
    <div>
      <Counter initialValue={1} maxValue={10} />
     
    </div>
  );
}

export default App;
