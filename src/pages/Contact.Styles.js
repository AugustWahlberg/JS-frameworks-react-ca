import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 3rem auto;
  margin-bottom: 6rem;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  border: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 120px;
  justify-content: center;
  max-width: 1800px;
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
  margin: 10px auto;
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
  line-height: 1.6em;
  background-color: #f8f8f8;
  border: solid 1px black;
  border-radius: 5px;
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
