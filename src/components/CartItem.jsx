import React from "react";
import { useCart } from "./CartContext";
import * as S from "../pages/Cart.Styles";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";

const CartItem = ({ product }) => {
  const { removeFromCart, decreaseQuantity, increaseQuantity } = useCart();

  return (
    <S.CartItem>
      <S.CartItemImg src={product.imageUrl} alt="product" />
      <S.CartItemInfo>
        <S.CartItemTitle>{product.title}</S.CartItemTitle>
        <S.CartItemText>Quantity: {product.quantity}</S.CartItemText>
        <S.QuantityButtons>
          <S.QuantityButton onClick={() => decreaseQuantity(product.id)}>-</S.QuantityButton>
          <S.QuantityButton onClick={() => increaseQuantity(product.id)}>+</S.QuantityButton>
        </S.QuantityButtons>
        <S.CartItemText>Price: {product.price}</S.CartItemText>
        <S.CartBtnWrapper>
        <Link to={`/product/${product.id}`}>
          <S.CartActionButton bgColor="#ece75f">
            <span>
              <AiFillEye />
            </span>{" "}
            View
          </S.CartActionButton>
        </Link>
        <S.CartActionButton bgColor="#FFB3B3" onClick={() => removeFromCart(product.id)}>
          <span>
            <BsFillTrash3Fill />
          </span>{" "}
          Delete
        </S.CartActionButton>
        </S.CartBtnWrapper>
      </S.CartItemInfo>
    </S.CartItem>
  );
};

export default CartItem;
