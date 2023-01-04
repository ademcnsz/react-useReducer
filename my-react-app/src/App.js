import './App.css';
import {useState,useReducer} from "react"
import TodoReducer from "./TodoReducer"


function App() {

  const [state, dispatch] = useReducer(TodoReducer,{
    todos:[],
    todo : ""
  });

  // const [todo,setTodo] = useState([]);
  // const [todos,setTodos] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    // setTodos([...todos, todo])
    // setTodo("")
    dispatch({
      type:"ADD_TODO",
      todo:state.todo
    }) 
  }
    const onChange = (e)=>{
      dispatch({
        type:"SET_TODO",
        value:e.target.value
      }) 
    }
  return (
    <div className="App">
      
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
          <input value={state.todo} onChange={onChange}></input>
          <button disabled={!state.todo} type='submit'>Ekle</button>
      </form>
      <ul>

        {state.todos.map((a,i)=>
        (<li key={i}>{a}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;
