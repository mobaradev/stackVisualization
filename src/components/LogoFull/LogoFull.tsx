import styled from "styled-components";
import A from "../Base/A/A";

const Container = styled.div`
  text-align: center;
  float: left;
`;

const H1 = styled.h1`
  font-size: 38px;
  margin-bottom: 0;
`;

const P = styled.p`
  margin-top: 0;
  text-align: right;
`;

function LogoFull() {
    return(
        <Container>
            <H1>Stack Visualization</H1>
            <P>
                by <A href="https://github.com/mobaradev" target="_blank">mobaradev</A>
            </P>
        </Container>
    )
}

export default LogoFull;