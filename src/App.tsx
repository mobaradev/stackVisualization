import React from 'react';
import Panel from "./components/Panel/Panel";
import styled from "styled-components";
import Stack from "./components/Stack/Stack";
import Center from "./components/Base/Center/Center";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: aliceblue;
`;

const StackContainer = styled.div`
  width: calc(100% - 240px);
  height: 100%;
  overflow: auto;
  padding: 200px 0;
  float: left;
`;


function App() {
  return (
    <Container>
      <Panel />
        <StackContainer>
            <Center>
                <Stack />
            </Center>
        </StackContainer>
    </Container>
  );
}

export default App;
