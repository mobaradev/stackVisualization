import StackElement from "./StackElement/StackElement";
import styled from "styled-components";
import {useEffect, useReducer, useState} from "react";
import AppController from "../../logic/AppController/AppController";
import Separator from "../Separator/Separator";
import Center from "../Base/Center/Center";
import Clearfix from "../Base/Clearfix/Clearfix";

const Container = styled.div<{usePushAnimation?: boolean, usePopAnimation?: boolean}>`
  width: 160px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0px 0 6px #cecbcb;
  padding: 20px;
  transition: all 0.5s;
  user-focus: none;
  user-select: none;
  touch-action: none;
  ${props => props.usePushAnimation ? "transform: scale(1.03);" : ""}
  ${props => props.usePopAnimation ? "transform: scale(0.97);" : ""}
`;

const InformationPanel = styled.div`
  text-align: center;
  
  h1, p {
    padding: 0;
    margin: 0;
  }
`;

const EmptyStackInfo = styled.i`
  font-size: 14px;
`

function Stack() {
    const [elements, setElements] = useState<number[]>([]);
    const [numberOfOperations, setNumberOfOperations] = useState(0);
    const [actionPending, setActionPending] = useState("");

    useEffect(() => {
        AppController.onPush = push;
        AppController.onPop = pop;
        AppController.onStackReload = reload;
    }, []);

    const reload = () => {
        setElements([...AppController.stack.elements]);
    }

    const push = (value: number) => {
        setElements( prevElements => [value, ...prevElements]);
        setNumberOfOperations(i => i + 1);

        setActionPending("push");
        AppController.stack.lock();

        setTimeout(() => {
            setActionPending("");
            AppController.stack.unlock();
        }, 1000);
    }

    const pop = () => {
        setActionPending("pop");
        AppController.stack.lock();

        setTimeout(() => {
            setActionPending("");
            AppController.stack.unlock();
            setElements(prevElements => {
                prevElements.splice(0, 1);
                return [...prevElements];
            });
        }, 1000);

        setNumberOfOperations(i => i + 1);
    }

    return(
        <Container usePushAnimation={actionPending === "push"} usePopAnimation={actionPending === "pop"}>
            <InformationPanel>
                <h1>Stack</h1>
            </InformationPanel>
            <Separator />
            {
                elements.map((element, index) =>
                    <StackElement index={index} actionPending={actionPending} key={index + "-" + numberOfOperations} value={element} />)
            }

            {
                elements.length === 0
                ?
                    <>
                        <Center>
                        <EmptyStackInfo>The stack is empty</EmptyStackInfo>
                        </Center>
                        <Clearfix />
                    </>
                :
                    ""
            }
        </Container>
    )
}

export default Stack;