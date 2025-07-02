import { Link } from "react-router-dom";

export default function ProductsPage() {
  return (
    <div>
      <h1>My Products Page</h1>
      <ul>
        <li>
          <Link to="/products/1">A Book</Link>
        </li>
        <li>
          <Link to="/products/2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/3">An Online Course</Link>
        </li>
      </ul>
    </div>
  );
}
