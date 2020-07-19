import styled, { FlattenSimpleInterpolation } from "styled-components";
import color, { transparent } from "../../utils/colors";
import rem from "../../utils/sizes";

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${ transparent(color.gray.Black, 0.4) };
`;

export const Window = styled.div<{ windowCustomStyles?: FlattenSimpleInterpolation }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  border: ${ rem(1) } solid ${ color.gray.DarkGray };
  background: ${ color.white.White };
  ${ props => props.windowCustomStyles }
`;

export const HeaderWrapper = styled.div<{ headerCustomStyles?: FlattenSimpleInterpolation }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  padding: ${rem(10)};
  background: ${ color.white.WhiteSmoke };
  ${ props => props.headerCustomStyles }
`;

export const ContentWrapper = styled.div<{ contentCustomStyles?: FlattenSimpleInterpolation }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: ${rem(10)};
  border-top: ${ rem(1) } solid ${ color.gray.DarkGray };
  border-bottom: ${ rem(1) } solid ${ color.gray.DarkGray };
  ${ props => props.contentCustomStyles }
`;

export const FooterWrapper = styled.div<{ footerCustomStyles?: FlattenSimpleInterpolation }>`
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: flex-end;
  padding: ${rem(10)};
  background: ${ color.white.WhiteSmoke };
  ${ props => props.footerCustomStyles }
`;