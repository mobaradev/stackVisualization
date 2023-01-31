import AppController from "../../logic/AppController/AppController";
import {useEffect, useState} from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
`

function Statistics(props: any) {
    const [numberOfElements, setNumberOfElements] = useState(0);
    const [numberOfOperations, setNumberOfOperations] = useState(0);

    useEffect(() => {
        AppController.onStackUpdate = update;
    })

    const update = () => {
        setNumberOfElements(AppController.stack.elements.length);
        setNumberOfOperations(AppController.stack.operationsCounter);
    }

    const getStackUniqueElementsCount = (): number => {
        return (AppController.stack.elements.filter((element, index) => {
            return AppController.stack.elements.indexOf(element) === index;
        })).length
    }

    return(
        <>
            <Table>
                <tbody>
                    <tr>
                        <td>Elements</td>
                        <td>{numberOfElements}</td>
                    </tr>
                    <tr>
                        <td>Unique elements</td>
                        <td>
                            {
                                getStackUniqueElementsCount()
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Operations</td>
                        <td>{numberOfOperations}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Statistics;