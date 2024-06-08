// Hooks
import React, { useEffect, useState } from "react";

// Components
import Input from "./components/Input";
import Todo from "./components/Todo";

// Types
import { Todos } from "./types/Type";

const App: React.FC = () => {

  const [addNewTodo, setAddNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("TODO");
    if (storedTodos) setTodos(JSON.parse(storedTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const trimmedTodo = addNewTodo.trim();
    if (trimmedTodo.length > 0) {
      if (addNewTodo) setTodos([...todos, { text: addNewTodo, id: todos.length + 1 }]);
      setAddNewTodo("");
      event?.preventDefault();
    }
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  const clearOneTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl sm:text-7xl font-bold text-white">TODO LIST WITH TSX</h1>
      <form
        className="flex-col items-center justify-center inline-block"
      >
        <Input
          addNewTodo={addNewTodo}
          setAddNewTodo={setAddNewTodo}
          addTodo={addTodo}
          clearAllTodos={clearAllTodos}
        />
        <Todo
          clearOneTodo={clearOneTodo}
          todos={todos}
        />
      </form>
    </div>
  );
};

export default App;