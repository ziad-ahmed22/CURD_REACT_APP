import { useEffect, useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "./Header";

export default function Products() {
  const [products, setProducts] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:9000/Products")
      .then((res) => res.data)
      .then((data) => setProducts(data));

    // fetch("http://localhost:9000/Products")
    // .then(res => res.json())
    // .then(data => setProducts(data))
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteProduct = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Delete Product ${product.title}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:9000/Products/${product.id}`);

        // fetch(`http://localhost:9000/Products/${product.id}`, {
        //     method: "DELETE"
        // })
        Swal.fire("The Product has been deleted.");
        getData();
      }
    });
  };

  return (
    <>
      <Header
        title="Products"
        btn={
          <Link to="/Products/add" className="btn btn-success">
            Add Product
          </Link>
        }
      />
      <div className="table-responsive overflow-auto">
        <table
          className="table table-dark table-hover table-striped border"
          style={{ minWidth: "900px" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <th>{product.id}</th>
                  <td>{product.title}</td>
                  <td>{product.description.slice(0, 30)}...</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>
                    <div className="btn-group">
                      <Link
                        to={`/Products/${product.id}`}
                        className="btn btn-sm px-4 btn-info"
                      >
                        View
                      </Link>
                      <Link
                        to={`/Products/edit/${product.id}`}
                        className="btn btn-sm px-4 btn-primary"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteProduct(product)}
                        className="btn btn-sm px-4 btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
