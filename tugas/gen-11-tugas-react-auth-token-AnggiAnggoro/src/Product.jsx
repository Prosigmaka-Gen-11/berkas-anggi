import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function Product() {
  const { token } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  function getProducts() {
    axios
      .get("https://dummyjson.com/auth/products", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        setProducts(result.data.products);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>List Products</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>No</th>
            <th>Tipe</th>
            <th>Desain</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
            <td>{item.id}</td>
              <td>{item.title}</td>
              <td><img width="100px" src={item.thumbnail}/></td>
          
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />

    </>
  );
}
