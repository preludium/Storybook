import React, { FunctionComponent } from "react";
import { default as ModalComponent } from "@components/Modal";
import Button from "@material-ui/core/Button";

export default {
    title: "Modal"
};

export const Modal: FunctionComponent = () => (
    <ModalComponent title="Title"
                    footerElements={ <Button variant="contained">Close</Button> }/>
);