import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function HomePage() {
  const { userData, token, logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
  }
  return (
    <>
      <h1>Hi {userData.firstName} {userData.lastName} !</h1>
        <img src={userData.image}/>
        <br/>
      <Link to="/prod">
        <button>Product</button>
      </Link>

      <Link to="/todo">
        <button>To Do List</button>
      </Link>
      <br />
      <br />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
