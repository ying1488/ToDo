import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import TodoList from './TodoList'
import Navbar from './Navbar'

function App() {
  const [toDo] = useState(0)

  return (
    <>
   <CssBaseline />
   <Navbar/>
        <TodoList/>

    </>
  )
}

export default App
