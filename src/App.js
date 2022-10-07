import React from 'react';
import './App.css';
import TodoForm from './component/TodoForm';
import Header from './component/Header';

function App() {
  return (
    <div className="container">
      <div className="App-wrapper" >
        <div>
          <Header />
        </div>
        <div>
          <TodoForm />
        </div>
        
      </div>  
    </div>
  );
}

export default App;
