import './App.css';
import * as React from 'react';
import TopHead from './components/TopHead';
import Tabs from './components/Tabs';
import BottomButtons from './components/BottomButtons';

function App() {
  return (
   
      <div className="App">
      <div className="top">< TopHead/></div>
      <div>
        <Tabs/>
      <div><BottomButtons></BottomButtons></div>
      </div>
     
    </div>

    
  );
}

export default App;
