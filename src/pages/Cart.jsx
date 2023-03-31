import React, { useEffect } from "react";
import { useCart } from "../components/CartContext.jsx";
import * as S from "./Cart.Styles";
import CartItem from "../components/CartItem"; // Add this import

export const Cart = () => {
  const { cart } = useCart();

  useEffect(() => {
    console.log("Cart updated: ", cart);
  }, [cart]);

  console.log('Cart:', cart);

  return (
    <S.Container>
      <S.CartTitle>Shopping Cart</S.CartTitle>
      {cart.length > 0 ? (
        cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </S.Container>
  );
};

export default React.memo(Cart);
