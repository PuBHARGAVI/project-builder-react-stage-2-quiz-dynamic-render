import logo from './logo.svg';
import './App.css';
import HomeComponent from './Components/HomeComponent';
import QuizComponent from './Components/QuizComponent';
import ResultComponent from './Components/ResultComponent';
import { Component } from 'react';
function App() {
  return (
    <div class="App">
      <QuizComponent/>
    </div>
  );
}

export default App;