import styled from "styled-components";

const Container = styled.div`
  width: 120px;
  height: 60px;
  background-color: aquamarine;
  border-radius: 12px;
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #41866e;
`;

function StackElement(props: any) {
    return(
        <Container>
            {props.value}
        </Container>
    )

}

export default StackElement;