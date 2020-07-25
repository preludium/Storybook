import styled, { css } from "styled-components";
import rem from "@utils/sizes";
import color, { transparent } from "@utils/colors";

export const HeaderWrapper = styled.div`
  display: flex;  
  justify-content: flex-end;
  align-items: center;
  position: relative;
  top: 0;
  width: 100%;
  padding: 0 ${ rem(20) };
  height: ${ rem(60) };
  background: ${ color.cyan.MediumTurquoise };
  box-shadow: 0 ${ rem(12) } ${ rem(12) } 0 ${ transparent(color.gray.Black, 0.3) };
`;

export const MenuWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const menuOptionHoverStyles = css`
  background: ${ color.cyan.DarkTurquoise };
  cursor: pointer;
`;

export const MenuOption = styled.div<{ isHovering?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${ rem(70) };
  padding: ${ rem(10) } ${ rem(30) };
  background: ${ color.cyan.MediumTurquoise };
  cursor: default;
  transition: background 0.3s ease-in-out;
  ${ props => props.isHovering && menuOptionHoverStyles }
  &:hover { ${menuOptionHoverStyles} }
`;

const chevronHoverStyles = css`
  transform: rotate(-90deg);
`;

export const ChevronWrapper = styled.div<{ isHovering?: boolean }>`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  ${ props => props.isHovering && chevronHoverStyles }
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
`;
