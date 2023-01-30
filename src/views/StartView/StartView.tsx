import styled from "styled-components";
import LogoFull from "../../components/LogoFull/LogoFull";
import Clearfix from "../../components/Base/Clearfix/Clearfix";
import Center from "../../components/Base/Center/Center";
import Button from "../../components/Button/Button";
import Separator from "../../components/Separator/Separator";
import AppController from "../../logic/AppController/AppController";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../App";
import Screen from "../../components/Screen/Screen";

const Wrapper = styled.div`
  width: 500px;
`;

function StartView(props: any) {
    const appContext = useContext(AppContext);

    return(
        <Screen screenId={0} isCenteredVertically>
            <Wrapper>
                <Clearfix />
                <Center>
                    <LogoFull />
                </Center>
                <Button onClick={() => appContext.setScreenVisibility(0, false)}>
                    Start with an empty stack
                </Button>

                <Button onClick={() => {
                    AppController.stack.randomize();
                    appContext.setScreenVisibility(0, false);
                }}>Start with a random stack</Button>
                <Clearfix />
                <Separator transparent />
                <Button onClick={() => appContext.setScreenVisibility(1, true)}>About and help</Button>
                <Clearfix />
                <Separator />
            </Wrapper>
        </Screen>
    )
}

export default StartView;