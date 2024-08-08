import { useState , useEffect} from "react";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/TodoList"

function App() {
  
const [todos, setTodos] = useState([])
const [todoValue, setTodoValue] = useState('')

function persistData(newList){
  localStorage.setItem('todos', JSON.stringify({todos:
    newList
  }))
}

function handleAddTodo(newTodo){
  const newTodoList = [...todos, newTodo]
  persistData(newTodoList)
  setTodos(newTodoList)

}
function handleDeleteTodo(index){
  const newTodoList = todos.filter((todo, todoIndex)=>{
     return todoIndex !== index
  })
  setTodos(newTodoList)
}
function handleEditTodo(index){
const valueToBeEdited = todos[index]
setTodoValue(valueToBeEdited)
handleDeleteTodo(index)
}

useEffect(() =>{
  if(!localStorage){
    return
  }
  let localTodos = localStorage.getItem('todos')
  if(!localTodos){
    return
  }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  
},[])

  return (
    <main>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodo={handleAddTodo}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
      
    </main>
  )
}

export default App;
