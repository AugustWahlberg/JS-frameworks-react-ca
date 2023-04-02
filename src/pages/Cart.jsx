import React, { useEffect } from "react";
import { useCart } from "../components/CartContext.jsx";
import * as S from "./Cart.Styles";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom"; // import useNavigate

export const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate(); // add this line to use navigate

  useEffect(() => {
    console.log("Cart updated: ", cart);
  }, [cart]);

  console.log("Cart:", cart);

  const getTotalPrice = () => {
    return cart.reduce((total, product) => {
      console.log("Product in cart:", product); // Add this line to log the product
      const price = typeof product.price === "number" ? product.price : 0;
      return total + price * product.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    navigate("/checkout-success");
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
        cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))
      ) : (
        <S.EmptyCart>
          <p>Your cart is empty</p>
        </S.EmptyCart>
      )}
    </S.Container>
  );
};

export default React.memo(Cart);
