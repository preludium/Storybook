import React, { FunctionComponent } from "react";
import { LayoutProps } from "./types";
import { LayoutWrapper } from "./styles";
import { GlobalStyle } from "@utils/GlobalStyle";

const Layout: FunctionComponent<LayoutProps> = (props) => {
    return (
        <LayoutWrapper>
            <GlobalStyle/>
            { props.children }
        </LayoutWrapper>
    );
};

export default Layout;