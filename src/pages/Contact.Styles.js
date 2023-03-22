import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  min-width: 100%;
  max-width: 100%;
  cursor: text;
`;

export const ContactTitle = styled.h1`
  font-size: 28px;
  margin: 30px auto;
  display: block;
  width: 100%;
  text-align: center;
`;

export const ContactBody = styled.p`
  font-size: 18px;
  display: block;
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(236, 231, 95, 0.8);
  line-height: 1.6em;
`;

export const Button = styled.button`
  padding: 12px 16px;
  background-color: #90ee90;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  :hover {
    background-color: black;
    color: white;
  }
`;
