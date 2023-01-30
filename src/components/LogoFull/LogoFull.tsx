import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  float: left;
`;

const H1 = styled.h1`
  font-size: 38px;
  margin-bottom: 0px;
`;

const P = styled.p`
  margin-top: 0px;
  text-align: right;
`;

const A = styled.a`
  color: black;
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
`;

function LogoFull(props: any) {
    return(
        <Container>
            <H1>Stack Visualizer</H1>
            <P>
                by <A href="https://github.com/mobaradev" target="_blank">mobaradev</A>
            </P>
        </Container>
    )
}

export default LogoFull;