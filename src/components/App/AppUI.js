import React from "react";
import './App.css'
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoForm } from "../TodoForm/TodoForm";
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Modal } from '../Modal/Modal';
import { LoadingTodos } from '../LoadingTodos/LoadingTodos';

function AppUI() {
    const { error, 
        loading, 
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    return (
        <div className="container">
            <div className="app-header">
                <h1 className="TodoTitle">To-do App</h1>
                <TodoCounter/>
                <TodoSearch/>
            </div>
    
            <TodoList>
                {error && <p className="alertMessage">Hubo un error...</p>}
                {loading && new Array(4).fill().map((item, index)=>(
                    <LoadingTodos 
                        key={index} 
                    />
                ))}
                {(!loading && !searchedTodos.length) && <p className="alertMessage">Crea tu primera tarea!</p>}
    
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
    
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
      </div>
    );
};

export { AppUI };