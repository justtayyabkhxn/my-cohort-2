import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todo } from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

    fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json=await res.json();
      setTodos(json.todos);
    })
  return (
    <div>
      <center>
        <CreateTodo />
        <Todo todos={todos}></Todo>
      </center>
    </div>
  );
}
export default App;
