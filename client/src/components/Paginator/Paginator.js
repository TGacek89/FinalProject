import React, { useState, useEffect } from "react";
import Todos from "./Todos";
import Pagination from "./Pagination";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(process.env.REACT_APP_API_URL + "/creation");
      setTodos(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  // Get current Todo
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container mt-5">
      <h1 className="text-success mb-3">Todo List</h1>
      <Todos todos={currentTodos} loading={loading} />
      <Pagination
        todosPerPage={todosPerPage}
        totalTodos={todos.length}
        paginate={paginate}
      />
    </div>
  );
};
export default App;
