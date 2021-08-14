import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./App.css";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./components/Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("Todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().task));
      });
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("Todos").add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>

      <form onSubmit={addTodo}>
        <FormControl>
          <InputLabel>Add a task</InputLabel>
          <Input value={input} onChange={(e) => handleChange(e)} />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          color="primary"
        >
          Add TODO
        </Button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
