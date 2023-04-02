import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 120px;
  background-color: #f8f8f8;
  border: solid 1px black;
  width: auto;
  max-width: 360px;
  margin: 120px auto;
`;

export const Heading = styled.h2`
  font-size: 1.7rem;
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const OrderNumber = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const BackButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: solid 1px black;
  background-color: #4a4a4a;
  color black
  color: white;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
  border-radius: 4px;
  background-color: #90ee90;
  padding: 12px 24px 12px 16px;
  font-size: 16px;
  max-height: 60px;

  &:hover {
    background-color: black;
    color: white;
  }
`;
