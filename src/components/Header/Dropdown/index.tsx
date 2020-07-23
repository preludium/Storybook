import React, { FunctionComponent } from "react";
import { DropdownProps } from "./types";
import {
    Wrapper, OptionWrapper,
    StyledLink, IconWrapper
} from "./styles";

const Dropdown: FunctionComponent<DropdownProps> = (props) => {
    const links = props.options && props.options.map((option, index) => {
        return (
            <OptionWrapper key={ index }>
                <StyledLink href={ option.href || "#" }>
                    <IconWrapper>
                        { option.icon }
                    </IconWrapper>
                    { option.title }
                </StyledLink>
            </OptionWrapper>
        );
    });

    return (
        <Wrapper onMouseEnter={ props.handleMouseEnter }
                 onMouseLeave={ props.handleMouseLeave }
        >
            { links }
        </Wrapper>
    );
};

export default Dropdown;