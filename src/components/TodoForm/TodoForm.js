import React from "react";
import './TodoForm.css'

function TodoForm({ addTodo, setOpenModal }) {
    const [ newTodoValue, setNewTodoValue ] = React.useState('');

    const onCancel = () => {
        setOpenModal(false);
    }

    const onEnter=(event)=> {
        if(event.keyCode === 13) {
            onSubmit(event);
        } else if(event.keyCode === 27) {
            setOpenModal(false);
        }
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
                onKeyDown={onEnter}
                placeholder="Ingresa la tarea..."
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