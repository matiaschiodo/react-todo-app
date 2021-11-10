import React from 'react';
import '../App/App.css'

function TodoHeader({ children, loading }) {
    return (
        <header className="app-header">
            <h1 className="TodoTitle">To-do App</h1>
            {React.Children
                    .toArray(children)
                    .map(child => React.cloneElement(child, { loading }))}
        </header>
    );
}

export { TodoHeader };