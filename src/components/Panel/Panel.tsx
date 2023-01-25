import styled from "styled-components"
import Button from "../Button/Button";

const Container = styled.div`
  width: 240px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 3px 0 6px #cecbcb;
  border-right: 2px solid silver;
  position: absolute;
  padding-bottom: 50px;
  top: 0;
  left: 0;
  float: left;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px 24px;
  overflow-y: auto;
  overflow-x: hidden;
  float: left;
`;

function Panel() {
    return(
        <Container>
            <Wrapper>
                Panel
                <Button>a</Button>
            </Wrapper>
        </Container>
    )
}

export default Panel;