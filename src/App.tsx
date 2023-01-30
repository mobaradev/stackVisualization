import React, {createContext, useEffect, useState} from 'react';
import Panel from "./components/Panel/Panel";
import styled from "styled-components";
import Stack from "./components/Stack/Stack";
import Center from "./components/Base/Center/Center";
import StartView from "./views/StartView/StartView";
import AboutView from "./views/AboutView/AboutView";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: aliceblue;
`;

const StackContainer = styled.div`
  width: calc(100% - 240px);
  height: 100%;
  overflow: auto;
  padding: 200px 0;
  float: left;
`;

type AppContextType = {
    visibleScreens: number[],
    setScreenVisibility: (id: number, visibility: boolean) => void
};

export const AppContext = createContext<AppContextType>({
    visibleScreens: [],
    setScreenVisibility: (id, visibility) => {}
});

function App() {
    const [visibleScreens, setVisibleScreens] = useState<number[]>([0]);

    const setScreenVisibility = (id: number, visibility: boolean) => {
        setVisibleScreens(visibleScreens => {
            if (visibility) {
                if (visibleScreens.indexOf(id) === -1) visibleScreens.push(id);
            } else {
                if (visibleScreens.indexOf(id) !== -1) visibleScreens.splice(visibleScreens.indexOf(id), 1);
            }
            return [...visibleScreens]
        });
    }

    return (
    <Container>
        <AppContext.Provider value={{visibleScreens: visibleScreens, setScreenVisibility: setScreenVisibility}}>
            <StartView />
            <AboutView />

            <>
                <Panel />
                <StackContainer>
                    <Center>
                        <Stack />
                    </Center>
                </StackContainer>
            </>
        </AppContext.Provider>
    </Container>
    );
}

export default App;
