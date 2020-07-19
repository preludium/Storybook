import Styled, {css} from "styled-components";

const hideStyles = css`
    max-height: 0;
    transition: max-height 0.3s ease-out;
    overflow: hidden;
`;

const showStyles = css`
    max-height: 500px;
    transition: max-height 0.3s ease-in;
`;

export const Wrapper = Styled.div<{ open: boolean, timeout: number }>`
    ${props => !props.open ? hideStyles : showStyles}
`;