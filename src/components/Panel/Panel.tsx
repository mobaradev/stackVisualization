import styled from "styled-components"
import Button from "../Button/Button";
import NumberInput from "../NumberInput/NumberInput";
import Center from "../Base/Center/Center";
import Separator from "../Separator/Separator";
import Clearfix from "../Base/Clearfix/Clearfix";
import Subsection from "../Subsection/Subsection";
import AppController from "../../logic/AppController/AppController";
import {useContext, useState} from "react";
import {AppContext} from "../../App";

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
    const [valueInput, setValueInput] = useState<string>("1");

    const appContext = useContext(AppContext);

    const parseValueInput = (valueInput: string): number => {
        return parseFloat(valueInput) ? parseFloat(valueInput) : 0;
    }

    return(
        <Container>
            <Wrapper>
                <Center>
                    <NumberInput onChange={(e) => setValueInput((e.target.value.replace(/\D/,'')))} value={valueInput} maxLength={4} />
                </Center>
                <Button onClick={() => AppController.stack.push(parseValueInput(valueInput))}>Push</Button>
                <Button onClick={() => AppController.stack.pop()}>Pop</Button>
                <Clearfix />
                <Separator />
                <Subsection title="Statistics">test</Subsection>
                <Clearfix />
                <Separator />
                <Button onClick={() => appContext.setScreenVisibility(1, true)}>About</Button>
            </Wrapper>
        </Container>
    )
}

export default Panel;