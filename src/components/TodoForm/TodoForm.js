import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
    const [ newTodoValue, setNewTodoValue ] = React.useState('')
    const { 
        addTodo, 
        setOpenModal 
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValue.length <= 0)return;
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return(
        <form onSubmit={onSubmit}>
            <label></label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Ir a la plaza a las 3pm"
            />
            <div>
                <button
                    className="buttonCancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="buttonSubmit"
                    type="submit"
                >
                    Aceptar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };