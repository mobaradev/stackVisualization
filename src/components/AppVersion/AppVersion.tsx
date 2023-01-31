import AppController from "../../logic/AppController/AppController";
import styled from "styled-components";

export const AppVersionContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 24px;
`;

const Span = styled.div`
  font-size: 14px;
`;

function AppVersion() {
    return(
        <Span>version: {AppController.version}</Span>
    )
}

export default AppVersion;