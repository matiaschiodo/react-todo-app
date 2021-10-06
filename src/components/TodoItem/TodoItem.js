import React from "react";
import './TodoItem.css';
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <AiFillCheckCircle 
                className={`TodoCheck ${props.completed && 'IconCheck-active'}`}
                onClick={props.onComplete}
            />

            <p 
                className={`${props.completed && 'TodoItem-completed'}`}>{props.text}
            </p>

            <AiFillCloseCircle 
                className="deleteTodo"
                onClick={props.onDelete}
            />
        </li>
    );
};

export { TodoItem };