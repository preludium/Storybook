import React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "./index";
import Button from "@material-ui/core/Button";

storiesOf("Components", module)
    .add("Modal", () =>
        <>
            <Modal title="Title"
                   footerElements={<Button variant="contained">Close</Button>}
            />
        </>
    );
