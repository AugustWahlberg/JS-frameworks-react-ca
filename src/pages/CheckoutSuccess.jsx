import React from "react";
import {useNavigate } from "react-router-dom";
import * as S from "./CheckoutSuccess.Styles";

const CheckoutSuccess = () => {
  const orderNumber = Math.floor(Math.random() * 100000);
  const navigate = useNavigate();

  const handleBackToStore = () => {
    navigate('/home');
  };

  return (
    <S.Container>
      <S.Heading>Checkout Success</S.Heading>
      <S.Message>Thank you for your order!</S.Message>
      <S.OrderNumber>Your order number is: #{orderNumber}</S.OrderNumber>
      <S.BackButton onClick={handleBackToStore}>Back to Store</S.BackButton>
    </S.Container>
  );
};

export default CheckoutSuccess;
