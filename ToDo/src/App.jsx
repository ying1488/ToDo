import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import TodoList from './TodoList'

function App() {
  const [toDo] = useState(0)

  return (
    <>
   <CssBaseline />
        <h1>To Dos</h1>

        <TodoList/>
    </>
  )
}

export default App
