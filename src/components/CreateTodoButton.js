import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton() {
    const onClickButton = (msg) => {
        alert(msg);
    };

    return (
        <button 
            className="TodoButton"
            onClick={() => onClickButton('modal')}
        >
            +
        </button>
    );
};

export { CreateTodoButton };