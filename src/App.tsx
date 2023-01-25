import React from 'react';
import Panel from "./components/Panel/Panel";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: antiquewhite;
`;


function App() {
  return (
    <Container>
      <Panel />
    </Container>
  );
}

export default App;
