import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  background: none;
  background-color: lightcoral;
  padding: 0;
  margin: 0;
  height: 50px;
`;

const Div = styled.li`
  background-color: black;
  padding: 0;
  margin: 0;
`;

function App() {
  return <Div> <Button>Hello</Button> </Div>;
}

export default App;