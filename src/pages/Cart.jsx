import React, { useEffect } from "react";
import { useCart } from "../components/CartContext.jsx";
import * as S from "./Cart.Styles";
import CartItem from "../components/CartItem";

export const Cart = () => {
  const { cart } = useCart();

  useEffect(() => {
    console.log("Cart updated: ", cart);
  }, [cart]);

  console.log('Cart:', cart);

  const getTotalPrice = () => {
    return cart.reduce((total, product) => {
      console.log('Product in cart:', product); // Add this line to log the product
      const price = typeof product.price === 'number' ? product.price : 0;
      return total + price * product.quantity;
    }, 0);
  };
  

  return (
    <S.Container>

<S.CartTitle>Shopping Cart</S.CartTitle>
      {cart.length > 0 && (
        <S.SummaryWrapper>
        <S.CartSummary>
          <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
          <S.CheckoutButton>Checkout</S.CheckoutButton>
        </S.CartSummary>
        </S.SummaryWrapper>
      )}
      
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
