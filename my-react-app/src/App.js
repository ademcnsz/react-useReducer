import './App.css';
import {useReducer,useCallback, useMemo} from "react"
import TodoReducer from "./components/TodoReducer"
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';


function App() {
  console.log("app rendered");
  const [state, dispatch] = useReducer(TodoReducer,{
    todos:[],
    todo : "",
    search:""
  });


  const submitHandle = useCallback((e)=>{
    e.preventDefault();
    dispatch({
      type:"ADD_TODO",
      todo:state.todo
    }) },[state.todo])
  
    const onChange = useCallback( (e)=>{
      dispatch({
        type:"SET_TODO",
        value:e.target.value
      }) 
    },[])

    const searchHandle = (e)=>{
      dispatch({
        type : "SET_SEARCH",
        value: e.target.value
      })
    }

    const filteredTodos =useMemo(()=>{
    return state.todos.filter(todo => todo.toLocaleLowerCase("TR").includes(state.search.toLocaleLowerCase("TR")))
    },[state.todo,state.search]) 
      
    

  return (
    <div className="App">
      
      <h1>Todo List</h1>
      <input placeholder='search todo' value={state.search} onChange={searchHandle}></input>
      <AddTodo onChange={onChange} submitHandle={submitHandle} todo={state.todo}></AddTodo>
      
      <Todos todos={filteredTodos}></Todos>
    </div>
  );
}

export default App;
