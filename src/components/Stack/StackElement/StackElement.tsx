import styled from "styled-components";
import {useEffect, useState} from "react";

const Container = styled.div<{visibilityLevel: 0 | 1, isTransition: boolean}>`
  width: 120px;
  height: 60px;
  background-color: aquamarine;
  border-radius: 12px;
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #41866e;

  opacity: ${props => props.visibilityLevel};
  transform: scale(${props => props.visibilityLevel});
  transition: ${props => props.isTransition ? "transform 1s, opacity 1s" : "none"};
`;

function StackElement(props: any) {
    const [visibilityLevel, setVisibilityLevel] = useState<0 | 1>(1);
    const [isTransition, setIsTransition] = useState(true);

    useEffect(() => {
        if (props.index === 0) {
            if (props.actionPending == "") {
                setIsTransition(false);
                setVisibilityLevel(1);
            } else if (props.actionPending === "push") {
                setIsTransition(false);
                setVisibilityLevel(0);
                setTimeout(() => {
                    setIsTransition(true);
                    setVisibilityLevel(1);
                }, 100)

            } else if (props.actionPending === "pop") {
                setTimeout(() => {
                    setIsTransition(true);
                    setVisibilityLevel(0);
                }, 50)

            }
        }
    }, [props.index, props.actionPending]);


    return(
        <Container visibilityLevel={visibilityLevel} isTransition={isTransition}>
            {props.value}
        </Container>
    )

}

export default StackElement;