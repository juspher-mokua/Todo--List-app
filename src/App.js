import React,{ useState}from 'react';
import './App.css';
import TodoForm from './component/TodoForm';
import Header from './component/Header';
import TodoList from './component/TodoLists';

function App() {
  // const initialState =JSON.parse(localStorage.getItem("todos") || []);
  const [input,setInput]= useState("");
  const [todos,setTodos]= useState([]);
  const [editTodo,setEditTodo]=useState(null);
  


  // useEffect(()=> {
  //   localStorage.setItem("todos", JSON.stringify(todos))
  // // },[todos]);
  return (
    <div className="container">
      <div className="App-wrapper" >
        <div>
          <Header />
        </div>
        <div>
          <TodoForm input={input}  setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
        </div>
        <div>
         <TodoList todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
        </div>
      </div>  
    </div>
  );
}

export default App;
