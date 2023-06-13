import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar p-3">
      <Link
        className="text-light fw-bold d-block text-center mt-1 mb-3 fs-4 text-decoration-none"
        to="Products"
      >
        L O G O
      </Link>
      <ul className="list-unstyled">
        <li>
          <Link
            to="/Products"
            className="badge bg-success w-100 my-2 p-2 text-light text-decoration-none"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/Products/add"
            className="badge bg-success w-100 my-2 p-2 text-light text-decoration-none"
          >
            Add Product
          </Link>
        </li>
      </ul>
    </div>
  );
}
