import React, { FunctionComponent } from "react";
import { CollapseProps } from "./types";
import { Wrapper } from "./styles";

const Collapse: FunctionComponent<CollapseProps> = (props) => {
    return (
        <Wrapper open={ props.open }
                 timeout={ props.timeout }
                 maxHeight={ props.maxHeight }
        >
            { props.children }
        </Wrapper>
    );
};

export default Collapse;