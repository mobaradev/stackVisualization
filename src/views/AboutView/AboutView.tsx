import styled from "styled-components";
import {useContext} from "react";
import {AppContext} from "../../App";
import Screen from "../../components/Screen/Screen";
import LogoFull from "../../components/LogoFull/LogoFull";
import Center from "../../components/Base/Center/Center";
import Clearfix from "../../components/Base/Clearfix/Clearfix";
import ScreenCloseButton from "../../components/ScreenCloseButton/ScreenCloseButton";
import imageA1 from "../../images/AboutScreen/a1.png";
import Separator from "../../components/Separator/Separator";
import A from "../../components/Base/A/A";


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

                <img src={imageA1} alt="Input area" height="100" />

                <p>
                    This value will be used in functions available from the buttons below:
                </p>
                <ul>
                    <li>Push</li>
                    <li>Pop</li>
                    <li>Top</li>
                </ul>

                <Separator />
                <h2>Functions</h2>
                <h3>Push</h3>
                <p>Pushes value to the top of the stack.</p>

                <h3>Pop</h3>
                <p>Pops top value from the stack.</p>

                <h3>Top</h3>
                <p>Marks with a different color the top value in the stack.</p>

                <br />
                <i>
                    When a function is called, the stack is locked for the amount of time needed to perform the function.
                    During that time, you cannot call other function.
                </i>

                <Separator />
                <h2>Author</h2>
                <p>
                    Michal Obara
                    <br/>
                    <A href="https://github.com/mobaradev" target="_blank">mobaradev on Github</A>
                </p>

                <Separator />
                <h2>License</h2>
                <p>
                    MIT License
                    <br/><br/>

                    Copyright (c) 2022 Michal Obara
                    <br/><br/>

                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:
                    <br/><br/>

                    The above copyright notice and this permission notice shall be included in all
                    copies or substantial portions of the Software.
                    <br/><br/>

                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.
                    <br/>
                </p>
            </Wrapper>
        </Screen>
    )
}

export default AboutView;