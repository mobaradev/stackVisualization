import StackElement from "./StackElement/StackElement";
import styled from "styled-components";
import {useEffect, useState} from "react";

const Container = styled.div`
  border: 2px solid gray;
  border-radius: 12px;
  padding: 20px;
`;

function Stack() {
    const [elements, setElements] = useState<number[]>([]);

    useEffect(() => {
        setElements([1,2,3]);
    }, []);

    return(
        <Container>
            {
                elements.map(element => <StackElement value={element} />)
            }
        </Container>
    )
}

export default Stack;