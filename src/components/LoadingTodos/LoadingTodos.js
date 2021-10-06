import React from "react";
import './LoadingTodos.css';

function LoadingTodos() {
    return(
        <li className="TodoItem-loading">
            <div className="LoaderBalls">
                <span className="LoaderBalls__item"></span>
                <span className="LoaderBalls__item"></span>
                <span className="LoaderBalls__item"></span>
            </div>
        </li>
    );
}

export { LoadingTodos };