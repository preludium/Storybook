import { ReactElement } from "react";
import { FlattenSimpleInterpolation } from "styled-components";

export interface ModalProps {
    title?: string;
    footerElements?: ReactElement;
    footerCustomStyles?: FlattenSimpleInterpolation;
    contentCustomStyles?: FlattenSimpleInterpolation;
    headerCustomStyles?: FlattenSimpleInterpolation;
    windowCustomStyles?: FlattenSimpleInterpolation;
}