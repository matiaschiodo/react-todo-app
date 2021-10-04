import React from "react";
import './TodoCounter.css'

function TodoCounter({ total, completed }) {

    return (
        <>
            <h2 className="TodoCounter">Has hecho {completed} de {total} tareas</h2>
        </>
    );
};

export { TodoCounter };