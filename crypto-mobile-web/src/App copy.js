import './App.css';
import * as React from 'react';
import { View } from 'react-native'; // Assuming you're using React Native
import { createStackNavigator } from '@react-navigation/stack';
import TopHead from './components/TopHead'; // Import your TopHead component
import Tabs from './components/Tabs'; /

function App() {
  return (
    <div className="App">
      <div className="top">< TopHead/></div>
      <div><Tabs/></div>
    </div>
  );
}

export default App;
