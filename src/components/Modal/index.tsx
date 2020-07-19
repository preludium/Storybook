import React, { FunctionComponent, PropsWithChildren } from "react";
import { ModalProps } from "./types";
import {
    Wrapper, Window, HeaderWrapper,
    ContentWrapper, FooterWrapper
} from "./styles";

const Modal: FunctionComponent<PropsWithChildren<ModalProps>> = (props) => {
    return (
        <Wrapper>
            <Window windowCustomStyles={props.windowCustomStyles}>
                <HeaderWrapper headerCustomStyles={props.headerCustomStyles}>
                    {props.title}
                </HeaderWrapper>
                <ContentWrapper contentCustomStyles={props.contentCustomStyles}>
                    {props.children}
                </ContentWrapper>
                {
                    props.footerElements &&
                    <FooterWrapper footerCustomStyles={props.footerCustomStyles}>
                        {props.footerElements}
                    </FooterWrapper>
                }
            </Window>
        </Wrapper>
    );
};
