import './App.css';
import React from "react";
import { Navbar } from './Components/Navbar';
import Todo from './Components/Todo';

function App() {
  return (
    <div className='app'>
        <Navbar/>
        <Todo/>
    </div>
  );
}

export default App;
