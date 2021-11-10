import React from "react";
import './TodoList.css'

function TodoList(props) {
    return (
        <section className="sectionList">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults()}
            {(!props.loading && !props.error) && props.searchedTodos.map(props.render)}
            <ul className="TodoList">
            </ul>
        </section>
    );
};

export { TodoList };