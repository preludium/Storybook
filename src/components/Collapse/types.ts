import { FlattenSimpleInterpolation } from "styled-components";

export interface CollapseProps {
    open: boolean;
    timeout?: number;
    maxHeight?: number;
    customStyles?: FlattenSimpleInterpolation;
}