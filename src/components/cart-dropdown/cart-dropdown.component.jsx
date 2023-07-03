import { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import "./cart-draopdown.styles.scss";
import { CartContext } from "../../context/card.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckout}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
