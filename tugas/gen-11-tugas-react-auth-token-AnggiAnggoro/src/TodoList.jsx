import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function ToDoList() {
  const { token } = useContext(AuthContext);
  const [toDo, setToDo] = useState([]);

 function getTodoList() {
    axios
      .get("https://dummyjson.com/auth/todos", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        setToDo(result.data.todos);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <>
      <h1>To DO List</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>No</th>
            <th>ToDo</th>
          </tr>
        </thead>
        <tbody>
          {toDo.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.todo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />

    </>
  );
}
