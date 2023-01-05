import {memo} from 'react'

function TodoItem({todo}) {
    console.log("todo item rendered");
  return (
    <li >{todo}</li>
  )
}

export default memo(TodoItem)
