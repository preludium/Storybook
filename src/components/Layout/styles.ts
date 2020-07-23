import styled from "styled-components";
import color, { transparent } from "@utils/colors";
import rem from "@utils/sizes";

export const LayoutWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: ${ rem(16) };
    background: ${ color.white.White };
    box-shadow: 0 0 ${ rem(12) } 0 ${ transparent(color.gray.Black, 0.05) };
`;
