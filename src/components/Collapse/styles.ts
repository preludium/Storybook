import styled, { css } from "styled-components";
import rem from "@utils/sizes";

const showStyles = css<{ timeout?: number, maxHeight?: number }>`
  max-height: ${ props => rem(props.maxHeight || 500) };
  transition: max-height ${ props => props.timeout || 300 }ms ease-in;
`;

export const Wrapper = styled.div<{ open: boolean, timeout?: number, maxHeight?: number }>`
  max-height: 0;
  transition: max-height ${ props => props.timeout || 300 }ms ease-out;
  overflow: hidden;
  ${ props => !props.open && showStyles }
`;