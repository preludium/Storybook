import React, { FunctionComponent, useRef } from "react";
import { CollapseProps } from "./types";
import { Wrapper } from "./styles";

const Collapse: FunctionComponent<CollapseProps> = (props) => {
    const content = useRef(null);

    return (
        <Wrapper ref={content}
                 open={props.open}
                 timeout={props.timeout}
        >
            {props.children}
        </Wrapper>
    );
};

export default Collapse;