import { Link } from "react-router-dom";

const Navbar = () => {
  //state to cart is empty/not empty
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="about_anchor">About</a>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
