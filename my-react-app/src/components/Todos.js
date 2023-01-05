import {memo} from 'react'
import TodoItem from './TodoItem'

function Todos({todos}) {
    console.log("todos rendered");
  return (
    <ul>
        {todos.map((todo,i)=><TodoItem key={i} todo={todo}></TodoItem>)}
      </ul>
  )
}

export default memo(Todos)
