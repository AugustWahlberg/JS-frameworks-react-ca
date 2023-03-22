import styled from "styled-components";

export const SearchElement = styled.form`
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  width: 200px;
  padding: 8px 24px 8px 16px;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
`;

export const SearchButton = styled.button`
  padding: 8px 24px 8px 16px;
  background-color: #90ee90;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  & > svg {
    font-size: 18px;
  }
`;
