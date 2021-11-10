import React from "react";
import './TodoCounter.css'

function TodoCounter({ totalTodos, completedTodos, loading }) {
    return (
        <>
            <h2 className={`TodoCounter ${loading && "TodoCounter__loading"}`}>Has hecho {completedTodos} de {totalTodos} tareas</h2>
        </>
    );
};

export { TodoCounter };