import { useState, useId } from "react";
// import "./style.css";

// function generateId() {
//   return Math.floor(Math.random() * 100);
// }

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const idPrefix = useId();

  const handleSubmit = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        { text: input, id: `${idPrefix}- ${todos.length + 1}` },
      ]);
      setInput("");
    }
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };
  const handleLine = (id)=>{
    setTodos(prev=> prev.map(todo=> todo.id === id ?  {...todo , isActive:!todo.isActive }: todo))
  }

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo"
      />

      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todos.map((i) => (
          <li key={i.id} className="todo">
            <span onClick={() => handleLine(i.id)} className={i.isActive ? "active" : ""}>{i.text}</span>
            <button className="close" onClick={() => removeTodo(i.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
