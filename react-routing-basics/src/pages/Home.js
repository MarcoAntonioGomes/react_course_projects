import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigation = useNavigate();

  function navigateHandler() {
    navigation("/products");
  }

  return (
    <div>
      <h1>My Home Page</h1>
      <Link to="/products">Products</Link>
      <button onClick={navigateHandler}>Navigate</button>
    </div>
  );
}

export default Home;
