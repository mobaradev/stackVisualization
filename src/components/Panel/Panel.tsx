import styled from "styled-components"
import Button from "../Button/Button";
import NumberInput from "../NumberInput/NumberInput";
import Center from "../Base/Center/Center";
import Separator from "../Separator/Separator";
import Clearfix from "../Base/Clearfix/Clearfix";
import Subsection from "../Subsection/Subsection";

const Container = styled.div`
  width: 240px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 3px 0 6px #cecbcb;
  border-right: 2px solid silver;
  float: left;
  padding-bottom: 50px;
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
                <Center>
                    <NumberInput />
                </Center>
                <Button>Push</Button>
                <Button>Pop</Button>
                <Clearfix />
                <Separator />
                <Subsection title="Statistics">test</Subsection>
            </Wrapper>
        </Container>
    )
}

export default Panel;