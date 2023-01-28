import StackElement from "./StackElement/StackElement";
import styled from "styled-components";
import {useEffect, useReducer, useState} from "react";
import AppController from "../../logic/AppController/AppController";

const Container = styled.div`
  border: 2px solid gray;
  border-radius: 12px;
  padding: 20px;
`;

function Stack() {
    const [elements, setElements] = useState<number[]>([1,2,3]);
    const [numberOfOperations, setNumberOfOperations] = useState(0);
    const [actionPending, setActionPending] = useState("");

    useEffect(() => {
        AppController.onPush = push;
        AppController.onPop = pop;
    }, []);

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
        <Container onClick={pop}>
            Action: {actionPending}
            {
                elements.map((element, index) =>
                    <StackElement index={index} actionPending={actionPending} key={index + "-" + numberOfOperations} value={element} />)
            }
        </Container>
    )
}

export default Stack;