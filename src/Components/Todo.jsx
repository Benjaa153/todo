import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const Todo = ({ todo, index, deleteTodo, handleCambio, updateTodo, completed }) => {
  return (
    <>
      <div className="list">
        <h3>{todo}</h3>
        <button className="btn btn-danger" onClick={() => deleteTodo(index)}>
          X
        </button>
        <button className="btn btn-primary" onClick={() => updateTodo(index)}>
          U
        </button>
     
     
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckIndeterminate"
            onChange={() => handleCambio(index)}
          />
          <label class="form-check-label" for="flexCheckIndeterminate">
            {completed == true ? <h3>Tarea completa</h3> : <h3>Tarea incompleta</h3>}
          </label>
        </div>
      </div>
    </>
  );
};

export default Todo;
