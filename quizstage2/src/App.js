import logo from './logo.svg';
import './App.css';
import HomeComponent from './Components/HomeComponent';
import QuizComponent from './Components/QuizComponent';
import ResultComponent from './Components/ResultComponent';
import { Component } from 'react';
function App() {
  return (
    <div className="App">
      <QuizComponent/>
    </div>
  );
}

export default App;