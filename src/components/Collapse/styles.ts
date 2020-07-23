import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import rem from "@utils/sizes";

const showStyles = css<{ maxHeight?: number }>`
  max-height: ${ props => rem(props.maxHeight || 500) };
`;

export const Wrapper = styled.div<{
    open: boolean, timeout?: number,
    maxHeight?: number, customStyles?: FlattenSimpleInterpolation
}>`
  max-height: 0;
  transition: max-height ${ props => props.timeout || 300 }ms ease-out;
  overflow: hidden;
  ${ props => props.open && showStyles }
  ${ props => props.customStyles }
`;