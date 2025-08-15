import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'; // Import the CSS

export default function TodoList() {
    let [todos, setTodos] = useState([
        { task: "sample-task", id: uuidv4(), isDone: false }
    ]);
    let [newTodo, setNewTodo] = useState("");

    let addTodo = () => {
        if (newTodo.trim() === "") return;
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    let MarkAllAsDone = () => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => ({ ...todo, isDone: true }));
        });
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone: true };
                }
                return todo;
            });
        });
    };

    return (
        <>

            <nav class="navbar">
                <a href="/"> <img src="/video/taskora.png" href="/" alt="Taskora Logo" className="logo" /> </a>
                &nbsp;&nbsp;&nbsp;

                <a href="/">ANAGHBRATI</a>
                &nbsp;&nbsp;&nbsp;

                <a href="https://github.com/Anaghbrati" target="_blank" rel="noopener noreferrer">GITHUB</a>
                &nbsp;&nbsp;&nbsp;
      
       
                <a href="https://www.linkedin.com/in/anaghbrati-sinha-ray-51a1a124b/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                &nbsp;&nbsp;&nbsp;

                <a href="https://leetcode.com/u/WkjEYUI4xp/" target="_blank" rel="noopener noreferrer">LEETCODE</a>
                &nbsp;&nbsp;&nbsp;

                <a href="https://www.geeksforgeeks.org/user/anaghbratisi5euo/" target="_blank" rel="noopener noreferrer">GEEKS FOR GEEKS</a>
                &nbsp;&nbsp;&nbsp;

                <a href="https://codolio.com/profile/anaghbratiray" target="_blank" rel="noopener noreferrer">CODOLIO</a>
                &nbsp;&nbsp;&nbsp;

            </nav>
            <br></br>

            <div className="todo-container">
                
                <h1 className="title"> Your Personalised Todo List APP</h1>
                
                <div className="input-section">
                    <input
                        placeholder="Add a new todo"
                        value={newTodo}
                        onChange={updateTodoValue}
                    />
                    <button className="btn" onClick={addTodo}>
                        Add Task
                    </button>
                </div>

                <hr />
                <h4>Tasks Todo</h4>
                <ol>
                    {todos.map((todo) => (
                        <li className="Task" key={todo.id}>
                            <span
                                style={
                                    todo.isDone
                                        ? { textDecoration: "line-through", color: "gray" }
                                        : {}
                                }
                            >
                                {todo.task}
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <button className="btn btn-delete" onClick={() => deleteTodo(todo.id)}>
                                Delete
                            </button>
                            &nbsp;
                            <button className="btn btn-done" onClick={() => markAsDone(todo.id)}>
                                Mark As Done
                            </button>
                        </li>
                    ))}
                </ol>
                <br />
                <button className="btn btn-all-done" onClick={MarkAllAsDone}>
                    Mark All As Done
                </button>

                <footer className="fixed bottom-0 left-0 w-full text-center py-4 bg-black/50 text-white backdrop-blur-md">
                    <p className="text-sm">
                        © {new Date().getFullYear()} My To-Do List | Built with ❤️ using React
                    </p>
                </footer>


            </div>
        </>
    );
}