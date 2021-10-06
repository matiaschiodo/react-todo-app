import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from "../TodoContext";

function CreateTodoButton(){
    const {
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    const handleClick = () => {
        setOpenModal(!openModal);
    }

    return (
        <button  
                className="TodoButton" 
                onClick={handleClick}
        >
            {openModal ? 'x' : '+'}
        </button>
    );
}

export { CreateTodoButton };