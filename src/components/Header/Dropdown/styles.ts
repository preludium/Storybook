import styled from "styled-components";
import rem from "@utils/sizes";
import color from "@utils/colors";

export const Wrapper = styled.div`
  background: ${ color.gray.Gainsboro };
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${ rem(15) } ${ rem(20) };
  transition: background 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background: ${ color.white.WhiteSmoke };
  }
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${ rem(10) } 0 0;
`;