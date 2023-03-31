import styled from "styled-components";

export const Container = styled.div`
  border: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 40px auto;
  margin-top: 140px;
  flex-direction: column; // Add this line
  align-items: center; // Add this line
`;

export const CartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;


export const CartItem = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px; // Add this line, adjust the value as needed
  padding: 10px;
  border-bottom: 1px solid #eee;
  margin: 0 auto; // Update this line
`;



export const CartTitle = styled.h1`
  font-size: 28px;
  margin: 30px auto;
  display: block;
  width: auto;
`;


export const CartItemImg = styled.img`
  width: 200px;

  margin-right: 20px;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartItemTitle = styled.h4`
  margin: 0;
  font-size: 18px;
`;

export const CartItemQuantity = styled.span`
  font-size: 14px;
  color: #999;
`;

export const CartItemPrice = styled.span`
  font-size: 18px;
  margin-left: auto;
`;
