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

    useEffect(() => {
        AppController.onPush = push;
        AppController.onPop = pop;
    }, []);

    const push = (value: number) => {
        setElements( prevElements => [value, ...prevElements]);
    }

    const pop = () => {
        setElements(prevElements => {
            prevElements.splice(0, 1);
            return [...prevElements];
        });
    }

    return(
        <Container onClick={pop}>
            {
                elements.map(element => <StackElement value={element} />)
            }
        </Container>
    )
}

export default Stack;