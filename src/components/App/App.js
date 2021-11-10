import React from 'react';
import './App.css';
import { useTodos } from "./useTodos";
import { TodoError } from '../TodoError/TodoError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { EmptySearchResults } from '../EmptySearchResults/EmptySearchResults';
import { ChangeAlert } from '../ChangeAlert/ChangeAlert';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoForm } from "../TodoForm/TodoForm";
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Modal } from '../Modal/Modal';
import { LoadingTodos } from '../LoadingTodos/LoadingTodos';
import { Footer } from '../Footer/Footer'


function App() {
    const { 
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        sincronizeTodos,
    } = useTodos();

    return (
        <div className="container">
            <TodoHeader loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>
    
            <TodoList
                error={error}
                loading={loading}
                searchedTodos={searchedTodos}
                totalTodos={totalTodos}

                onError={() => <TodoError/>}
                onLoading={() => new Array(4).fill().map((item, index)=>(
                                <LoadingTodos
                                    key={index}
                                />
                            ))}
                onEmptyTodos={() => <EmptyTodos/>}
                onEmptySearchResults={() => <EmptySearchResults
                                                searchedText={searchValue}
                                            />}
                render={(todo, index) => (
                            <TodoItem
                                key={index}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                )}
            >
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm
                        addTodo={addTodo}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )}
    
            <CreateTodoButton 
                setOpenModal={setOpenModal}
                openModal={openModal}
            />

            <ChangeAlert
                sincronize={sincronizeTodos}
            />

            <Footer/>
      </div>
    );
}

export default App;