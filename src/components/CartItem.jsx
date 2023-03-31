import React from "react";
import * as S from "../pages/Cart.Styles";

export const CartItem = (props) => {
  const { product } = props;

  return (
    <S.CartItem>
      <S.CartItemImg src={product.imageUrl} alt="product" />
      <S.CartItemInfo>
        <S.CartItemTitle>{product.title}</S.CartItemTitle>
        <S.CartItemQuantity>Quantity: {product.quantity}</S.CartItemQuantity>
      </S.CartItemInfo>
    </S.CartItem>
  );
};

export default React.memo(CartItem);
