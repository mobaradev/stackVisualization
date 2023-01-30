import styled from "styled-components";
import {useContext} from "react";
import {AppContext} from "../../App";
import Screen from "../../components/Screen/Screen";
import ScreenCloseButton from "../../components/ScreenCloseButton/ScreenCloseButton";
import LogoFull from "../../components/LogoFull/LogoFull";
import Center from "../../components/Base/Center/Center";
import Clearfix from "../../components/Base/Clearfix/Clearfix";

const Wrapper = styled.div`
  width: 700px;
  padding: 30px 0;
`;

function AboutView(props: any) {
    const appContext = useContext(AppContext);

    return(
        <Screen screenId={1}>
            <ScreenCloseButton onClick={() => appContext.setScreenVisibility(1, false)} />
            <Wrapper>
                <Center>
                    <LogoFull />
                </Center>
                <h2>How to use</h2>
                <h3>Getting started</h3>
                <p>
                    Select the initial stack:
                </p>
                <ul>
                    <li>
                        Start with an empty tree
                    </li>
                    <li>
                        Start with a random tree
                    </li>
                </ul>

                <Clearfix />

                <h3>Manage your stack</h3>
                <p>
                    Stack can be managed from the side-panel on the left.
                </p>

                <p>
                    Insert the number into the input area.
                </p>
            </Wrapper>
        </Screen>
    )
}

export default AboutView;