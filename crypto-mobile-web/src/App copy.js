import './App.css';
import TopHead from './components/TopHead';
import BTCChart from './components/BTCChart';

function App() {
  return (
    <div className="App">
      <div className="top">< TopHead/></div>
      <div>
        <BTCChart/>
      </div>
    </div>
  );
}

export default App;
