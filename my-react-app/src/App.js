import './App.css';
import {useState} from "react"

function App() {

  const [todo,setTodo] = useState([]);
  const [todos,setTodos] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setTodos([...todos, todo])
    setTodo("")
  }

  return (
    <div className="App">
      
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
          <input value={todo} onChange={(e)=> setTodo(e.target.value)}></input>
          <button disabled={!todo} type='submit'>Ekle</button>
      </form>
      <ul>

        {todos.map((a,i)=>
        (<li key={i}>{a}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;
