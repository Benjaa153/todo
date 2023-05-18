import React, {useState, useRef} from 'react'
import Todo from './Todo'


const Form = () => {

    const inputText = useRef(); // utilizamos el hook de useRef para no tener que acceder al elemento input mediante el DOM

    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([
        {todo: 'todo 1', completed: false},
        {todo: 'todo 2', completed: false},
        {todo: 'todo 3', completed: false}
    ])

    const handleChange = e => setTodo({[e.target.name]: e.target.value})

    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('el campo no puede estar vacio')
            return
        }
        setTodos([...todos, todo])
         inputText.current.value = ''

    }

    const deleteTodo = indice => {
        const resetTodos = [...todos]
        resetTodos.splice(indice, 1)
        setTodos(resetTodos)
    }

    const handleCambio = (indice) => {
        const newTodos = todos.slice(); // Copia de la matriz
        newTodos[indice].completed = !newTodos[indice].completed; // Cambiar el valor de 'completed'
        setTodos(newTodos); // Actualizar el estado
    }
    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar tarea</label><br />
                <input type="text" name="todo" onChange={handleChange} ref={inputText}/>
                <button onClick={handleClick}></button>
            </form>
            {
                todos.map((value, index) => (
                    <Todo 
                        todo={value.todo}
                        key={index}
                        index={index}
                        deleteTodo={deleteTodo}
                        handleCambio = {handleCambio}
                        completed={value.completed}
                    />
                ))
            }
            <div>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</div>
        </>
    )
}

export default Form