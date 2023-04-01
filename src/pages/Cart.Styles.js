import styled from "styled-components";

export const Container = styled.div`
  border: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 40px auto;
  margin-top: 140px;
  max-width: 1000px;
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
  max-width: 400px;
  padding: 10px;
  border-bottom: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin: 20px;
`;

export const CartTitle = styled.h1`
  font-size: 28px;
  margin: 30px auto;
  display: block;
  width: 100%;
  text-align: center;
`;


export const CartItemImg = styled.img`
  width: 200px;

  margin-right: 20px;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const CartItemTitle = styled.h4`
  margin: 0;
  font-size: 18px;
`;

export const CartItemText = styled.span`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
`;

export const CartItemPrice = styled.span`
  font-size: 18px;
  margin-left: auto;
`;

export const CartActionButton = styled.button`
  background-color: ${(props) => props.bgColor || "#ff6347"};
  border: none;
  color: white;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  justify-content: center; 
  align-items: center; 
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  width: 100px;
  border-radius: 8px;
  color: black;
  font-weight: 500;

  & > span {
    padding-right: 1px;
    font-size: 14px;
  }

  :hover {
    background-color: black;
    color: white;
  }
`;

export const CartBtnWrapper = styled.div`
  width: 120px;
  height: 160px;
  display: flex; 
  flex-direction: column; 
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 8px;
`;

export const SummaryWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

export const CartSummary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  width: 300px;
  border: solid 1px black; 

`;

export const CheckoutButton = styled.button`
  background-color: #90ee90;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  margin-left: 20px;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  color: black;
  font-weight: 800;

  :hover {
    background-color: black;
    color: white;
  }
`;
