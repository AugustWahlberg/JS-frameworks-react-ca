import React, { useEffect } from "react";
import { useCart } from "../components/CartContext.jsx";
import * as S from "./Cart.Styles";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [checkoutClicked, setCheckoutClicked] = React.useState(false);

  useEffect(() => {
    if (checkoutClicked && cart.length === 0) {
      navigate("/checkout-success");
      setCheckoutClicked(false);
    }
  }, [cart, navigate, checkoutClicked]);

  const getTotalPrice = () => {
    return cart.reduce((total, product) => {
      const price = typeof product.price === "number" ? product.price : 0;
      return total + price * product.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    clearCart();
    setCheckoutClicked(true);
  };

  return (
    <S.Container>
      <S.CartTitle>Shopping Cart</S.CartTitle>
      {cart.length > 0 && (
        <S.SummaryWrapper>
          <S.CartSummary>
            <p>
              Total Price: <span>${getTotalPrice().toFixed(2)} </span>{" "}
            </p>
            <S.CheckoutButton onClick={handleCheckout}>
              Checkout
            </S.CheckoutButton>
          </S.CartSummary>
        </S.SummaryWrapper>
      )}

      {cart.length > 0 ? (
        cart.map((product) => <CartItem key={product.id} product={product} />)
      ) : (
        <S.EmptyCart>
          <p>Your cart is empty</p>
        </S.EmptyCart>
      )}
    </S.Container>
  );
};

export default React.memo(Cart);
