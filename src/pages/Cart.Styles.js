import styled from "styled-components";

export const Container = styled.div`
  border: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 120px auto;
  max-width: 500px;
  justify-content: center;
`;

export const CartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;


export const CartItem = styled.div`
  display: flex;
  max-width: 300px;
  width: auto;
  padding: 20px;
  border-bottom: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin: 20px;
  padding-right:40px ;
`;

export const CartTitle = styled.h1`
  font-size: 28px;
  margin: 10px auto;
  display: block;
  width: 100%;
  text-align: center;
`;


export const CartItemImg = styled.img`
  margin-right: 20px;
  max-width: 200px;
  min-width: 120px;
  height: 240px;
 display: inline-block;
  vertical-align: middle;
  object-fit: cover;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const CartItemTitle = styled.h4`
  margin: 0;
  font-size: 20px;
`;

export const CartItemText = styled.span`
  font-size: 16px;
  color: #444444;
  margin-top: 10px;

  & > span {
    font-weight: 600;
  }
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
  height: 100px;
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
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  width: 300px;
  background-color: #f8f8f8;
  border: solid 1px black; 
  & > p span {
    font-weight: 600;
  }
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
  border: solid 1px black;

  :hover {
    background-color: black;
    color: white;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const QuantityButtons = styled.div`
  display: flex;
  margin: 5px 0;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuantityButton = styled.button`
  background-color: #f1f1f1;
  border: 1px solid #c1c1c1;
  color: black;
  padding: 5px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 3px;

  :hover {
    background-color: #e0e0e0;
  }
`;

export const QuantityText = styled.span`
  font-size: 19px;
  padding: 0 5px;
`;
