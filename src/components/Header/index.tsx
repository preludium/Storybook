import React, { FunctionComponent, useState } from "react";
import { HeaderProps } from "./types";
import {
    HeaderWrapper, MenuWrapper,
    MenuOption, ChevronWrapper,
    StyledLink
} from "./styles";
import Dropdown from "./Dropdown";
import { DropdownOption } from "./Dropdown/types";
import { ChevronLeft, InfoOutlined } from "@material-ui/icons";
import Collapse from "@components/Collapse";
import { css } from "styled-components";
import rem from "@utils/sizes";

const Header: FunctionComponent<HeaderProps> = () => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const dropdownOptions: DropdownOption[] = [
        {
            title: "Option 1",
            icon: <InfoOutlined/>
        }, {
            title: "Option 2",
            icon: <InfoOutlined/>
        }, {
            title: "Option 3",
            icon: <InfoOutlined/>
        }
    ];

    const collapseCustomStyles = css`
      position: absolute;
      top: ${ rem(60) };
      right: 0;
      width: ${ rem(300) };
    `;

    return (
        <HeaderWrapper>
            <MenuWrapper>
                <MenuOption>
                    <StyledLink href="#">
                        Home
                    </StyledLink>
                </MenuOption>
                <MenuOption>
                    <StyledLink href="#">
                        Profile
                    </StyledLink>
                </MenuOption>
                <MenuOption onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                            isHovering={showDropdown}
                >
                    Account
                    <ChevronWrapper isHovering={showDropdown}>
                        <ChevronLeft/>
                    </ChevronWrapper>
                </MenuOption>
                <Collapse open={showDropdown}
                          customStyles={collapseCustomStyles}
                >
                    <Dropdown options={dropdownOptions}
                              handleMouseEnter={() => setShowDropdown(true)}
                              handleMouseLeave={() => setShowDropdown(false)}
                    />
                </Collapse>
            </MenuWrapper>
        </HeaderWrapper>
    );
};

export default Header;