// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";

const CartLink = () => {
  const navigate = useNavigate();
  const cart: number[] = [1];
  return (
    <section className="cart_link" onClick={() => navigate("/cart")}>
      <section className="cart_link_info">
        <span>Shopping Cart</span>
        <span>0 Item</span>
      </section>
      <section className="cart_link_icon_section">
        <FontAwesomeIcon icon={faCartShopping} />
        {cart.length ? <span className="counter">1</span> : ""}
      </section>
    </section>
  );
};

export default CartLink;
