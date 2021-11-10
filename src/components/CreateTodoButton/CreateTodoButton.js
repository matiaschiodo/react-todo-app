import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton({ openModal, setOpenModal }){

    const handleClick = () => {
        setOpenModal(!openModal);
    }

    return (
        <button  
                className={`TodoButton ${openModal && "TodoButton__open"}`}
                onClick={handleClick}
        >
            +
        </button>
    );
}

export { CreateTodoButton };