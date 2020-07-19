import React, { FunctionComponent } from "react";
import { LayoutProps } from "./types";
import { Wrapper } from "./styles";

const Layout: FunctionComponent<LayoutProps> = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
};

export default Layout;