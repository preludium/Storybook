import { ReactNode } from "react";

export interface DropdownOption {
    title?: string;
    icon?: ReactNode;
    href?: string;
    component?: ReactNode;
}

export interface DropdownProps {
    options?: DropdownOption[];
    handleClose?: () => void;
    handleMouseEnter?: () => void;
    handleMouseLeave?: () => void;
}