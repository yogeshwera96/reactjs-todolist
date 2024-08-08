
export default function TodoInput(props){
    const {handleAddTodo, todoValue, setTodoValue} = props

    
    return(
        <header>
            <input value={todoValue} onChange={(e)=>{
                setTodoValue(e.target.value)
            }} placeholder='Enter Todo..'></input>
            <button onClick={() => {
                handleAddTodo(todoValue)
                setTodoValue ('') 
                }}>Add</button>
        </header>
            
    )
}