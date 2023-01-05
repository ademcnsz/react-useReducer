import {memo} from 'react'

function AppTodo({submitHandle,onChange,todo}) {
  console.log("add todo rendered");
  return (
        <form onSubmit={submitHandle}>
          <input value={todo} onChange={onChange}></input>
          <button disabled={!todo} type='submit'>Ekle</button>
      </form>
  )
}

export default memo(AppTodo)
