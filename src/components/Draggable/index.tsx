import React, { FunctionComponent } from "react";
import { default as DragabbleComponent } from "react-draggable";
import { DraggableProps } from "./types";
import * as UI from "./styles";

const Draggable: FunctionComponent<DraggableProps> = () => {
    return (
        <UI.Wrapper>
            <DragabbleComponent handle=".handle">
                <UI.Window>
                    <UI.Header className="handle">
                        Help
                    </UI.Header>
                    <UI.Content>UGABUGA</UI.Content>
                    <UI.Footer>NOGA</UI.Footer>
                </UI.Window>
            </DragabbleComponent>
        </UI.Wrapper>
    );
};

export default Draggable;
