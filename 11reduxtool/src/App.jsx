import { useState } from 'react'
import { addTodo,removeTodo } from './features/todo/todoSlice'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'

function App() {
  return (
    <>
    <TodoForm/>
    <Todos/>
    </>
  )
}

export default App

