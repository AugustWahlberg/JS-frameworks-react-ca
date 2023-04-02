import React from "react";
import { Link } from "react-router-dom";
import * as S from "./CheckoutSuccess.Styles";

const CheckoutSuccess = () => {
  const orderNumber = Math.floor(Math.random() * 100000);

  return (
    <S.Container>
      <S.Heading>Checkout Success</S.Heading>
      <S.Message>Thank you for your order!</S.Message>
      <S.OrderNumber>Your order number is: {orderNumber}</S.OrderNumber>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <S.BackButton>Back to Store</S.BackButton>
      </Link>
    </S.Container>
  );
};

export default CheckoutSuccess;
